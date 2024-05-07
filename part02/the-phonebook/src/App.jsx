import { useState, useEffect } from 'react'
import axios from 'axios';

// Search filter component
const Filter = ({ filterInput, filter }) => {
  return (
    <div>
      <label htmlFor="filterByName">Filter by name: </label>
      <input id='filterByName' onChange={filterInput} value={filter} />
    </div>
  );
}

// Add Person component
const AddPerson = ({ states, functions }) => {
  const [addPerson, nameInput, phoneInput] = functions;
  const [newName, newPhone] = states;

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id='name' onChange={nameInput} value={newName} />
        </div>
        <div>
          <label htmlFor="phoneNum">Phone Number: </label>
          <input id='phoneNum' onChange={phoneInput} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

// Show contacts in list component
const ContactList = ({ states }) => {
  const [persons, filter] = states;
  const filteredPersons = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(filter.toLowerCase()
    ));

  return (
    <div>
      <h2>Contacts Numbers</h2>
      <ul>
        {filter.length === 0 ? (
          persons.map((person) =>
            <li key={person.id}>{person.name} - phone: {person.phone}</li>)
        ) : (filteredPersons.length > 0 ? (
          filteredPersons.map((person) => <li key={person.id}>{person.name} - phone: {person.phone}</li>
          )) : (
          <p>No matchs where found</p>
        ))
        }
      </ul>
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Effect...');
    axios
      .get('http://localhost:3001/persons')
      .then(promise => {
        console.log('promise completed');
        setPersons(promise.data)
      })
  }, []);
  console.log(`Phonebook contacts count = ${persons.length}`);

  const filterInput = (e) => {
    setFilter(e.target.value);
  }

  const nameInput = (e) => {
    setNewName(e.target.value);
  }

  const phoneInput = (e) => {
    setNewPhone(e.target.value);
  }

  const addPerson = (e) => {
    e.preventDefault();
    const isDuplicated = persons.some(person => person.name.toLowerCase() === newName.toLowerCase() || person.phone === newPhone);
    if (isDuplicated) {
      alert(`${newName} or ${newPhone} is already added to the phonebook, try another name and phone combination please`);
      return;
    }
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: `${newName}-${newPhone}`,
    };
    setPersons(prevState => [...prevState, newPerson])
    // Alternative: setPersons(persons.concat(newObj));
    setNewName('');
    setNewPhone('');
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filterInput={filterInput}
        filter={filter}
      />
      <AddPerson
        states={[newName, newPhone]}
        functions={[addPerson, nameInput, phoneInput]}
      />
      <ContactList states={[persons, filter]} />
    </div>
  )
}

export default App
