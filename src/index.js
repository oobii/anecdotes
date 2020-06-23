import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => {
  return (
    
      <button onClick={props.handle}>{props.text}</button>
    
  )
}

const App = (props) => {
  const count = props.anecdotes.length
  const [selected, setSelected] = useState(Math.floor(Math.random() * count))
  const [votes,setVote] = useState({0:0,1:0,2:0,3:0,4:0,5:0})

  let most = 0
  for( const [key, value] of Object.entries(votes)) {
    if(votes[key] >= votes[most]) {
      most = key
    }
    //console.log(`${key} : ${value}`)
  }

  const handleNextAnecdote = () => {
    const indx = Math.floor(Math.random() * count)
    console.log(indx);
    setSelected(indx)
  
  }

  const handleVote = () => {
    const copy = votes
    votes[selected] += 1
    console.log(votes);

  }


  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button text="vote" handle={handleVote} />
      <Button text="next anecdote" handle={handleNextAnecdote} />
      <br></br>
      <h3>Anecdote with most votes:</h3>
      {props.anecdotes[most]}
      
      
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)