import React, { useState } from 'react'
const Button = (props) => {
  return(
      <button onClick={props.handleClick}>{props.text}</button>
  )
}
const Votes = (props) => {
    return(
        <div>
            Votes: {props.vote}
            <br/>
            <Button handleClick={() => props.copy[props.selected]+= 1} text = "console log"/>
            <Button handleClick={() => console.log(props.copy[props.selected])} text = "Log"/>
        </div>
    )
}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const points = [0, 0, 0, 0]
    const copy = [...points]
    console.log(copy[2])
    copy[2] += 1
    console.log(copy[2])
    const [selected, setSelected] = useState(0)
    console.log("selected", selected)
    return (
        <div>
            {anecdotes[selected]}
            <br/>
            <Votes vote = {copy[selected]}/>
        </div>
    )
}

export default App