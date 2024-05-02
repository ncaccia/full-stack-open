import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ click, label }) => (
  <button onClick={click}>
    {label}
  </button>
)

const StatisticLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  const [good, neutral, bad] = stats

  let all = good + bad + neutral
  let average = (good - bad) / all
  let positive = good / all * 100

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={all} />
        <StatisticLine label="average" value={average.toFixed(2)} />
        <StatisticLine label="positive" value={positive.toFixed(2) + ' %'} />
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title="Give feedback" />
      <Button
        click={handleClickGood}
        label={"good"}
      />
      <Button
        click={handleClickNeutral}
        label={"neutral"}
      />
      <Button
        click={handleClickBad}
        label={"bad"}
      />
      <Header title="Statistics" />
      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

export default App
