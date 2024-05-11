import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState({})
  const [weatherApiCounter, setWeatherApiCounter] = useState(0);

  // Effect to initiate Countries Data
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_HELSINSKI_API_URL)
      .then(res => setCountries(res.data))
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, [])

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const showCountry = (country) => {
    setValue(country)
  }

  // Function to fetch weather data
  const getWeather = (lat, lon) => {
    setWeatherApiCounter(prevState => prevState + 1);
    axios
      .get(
        `${import.meta.env.VITE_OPENWEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
      )
      .then(res => {
        setWeather(res.data)
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
      });
  }
  console.log(`The weatherAPI has been called: ${weatherApiCounter} times`)

  return (
    <div>
      <h1>Contries data</h1>
      <SearchInput value={value} onChange={changeHandler} />
      <ConditionalRender
        states={[
          countries,
          value,
          weather
        ]}
        functions={[
          showCountry,
          getWeather
        ]}
      />
    </div>
  )
}

export default App;

const SearchInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="searchCountries">Find countries: </label>
      <input
        id='searchCountries'
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const ConditionalRender = ({ states, functions }) => {
  const [matchFound, setMatchFound] = useState(false);
  const [countries, value, weather] = states
  const [showCountry, getWeather] = functions
  const searchRegExp = new RegExp(`\\b${value}`, "gi");
  const filteredCountries = countries.filter(country => searchRegExp.test(country.name.common));

  useEffect(() => {
    if (filteredCountries.length === 1 && !matchFound) {
      setMatchFound(true);
      const [lat, lon] = filteredCountries[0].latlng;
      getWeather(lat, lon);
      console.log(`<<<API CALL>>> for lat:${lat} / lon:${lon}`);
    } else if (filteredCountries.length > 1 && matchFound) {
      setMatchFound(false);
    }
  }, [filteredCountries, getWeather, matchFound]);


  // Case: no search value 
  if (value === "") {
    return null;
  }
  // Case: search result > 10 countries 
  if (filteredCountries.length > 10) {
    return <p>To many matches, specify another filter</p>;
  }
  // Case: search result < 10 > 1 countries
  if (filteredCountries.length > 1) {
    return (
      <ul>
        {filteredCountries.map(c => (
          <li key={`${c.name.common}_${c.area}`}>
            {c.name.common} <button onClick={() => showCountry(c.name.common)} style={{ fontSize: "0.7em" }} >Show</button>
          </li>
        ))}
      </ul>
    );
  }
  // Case: search result === 1 country
  if (filteredCountries.length === 1 && matchFound && weather && Object.keys(weather).length > 0) {
    return (
      <div>
        <CountryDetail filteredCountries={filteredCountries} />
        <WeatherDetail filteredCountries={filteredCountries} weather={weather} />
      </div>
    );
  }
};

const CountryDetail = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map(c => (
        <div key={`${c.name.common}_${c.area}`}>
          <h1>{c.name.common}</h1>
          <p>
            Capital: {c.capital} <br />
            Area: {c.area}
          </p>
          <h4>Languages:</h4>
          <ul>
            {Object.entries(c.languages).map(([key, language]) => (
              <li key={key}>{language}</li>
            ))}
          </ul>
          <img src={c.flags.svg} alt={c.flags.alt} style={{ height: 150 }} />
        </div>
      ))}
    </div>

  );
};

const WeatherDetail = ({ filteredCountries, weather }) => {
  return (
    <div>
      {filteredCountries.map(c => (
        <h3 key={`${c.name.common}_${c.area}`}>Weather in {c.name.common}</h3>
      ))}
      <p>Temperature:{weather.main.temp} Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
