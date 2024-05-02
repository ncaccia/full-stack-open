import { useState } from 'react'

// const anecdotes = [
//   { text: 'If it hurts, do it more often.', votes: 0 },
//   { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
//   { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
//   { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
//   { text: 'Premature optimization is the root of all evil.', votes: 0 },
//   { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
//   { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
//   { text: 'The only way to go fast, is to go well.', votes: 0 }
// ]


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const intialVotes = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(intialVotes)

  const randomAnec = () => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * anecdotes.length);
    } while (randomNum === selected);
    setSelected(randomNum);
  }

  const addVote = () => {
    setVotes(originalState => {
      const newState = [...originalState];
      newState[selected] += 1;
      return newState;
    });
  }

  const mostVotedIdx = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>- it has {votes[selected]} votes</p>
        <button onClick={addVote}>Vote this Anecdote</button>
        <button onClick={randomAnec}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p><b>{anecdotes[mostVotedIdx]}</b></p>
      <p>- it has {votes[mostVotedIdx]} votes</p>

    </div>
  )
}

export default App