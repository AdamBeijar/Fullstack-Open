import React, { useState } from 'react'
const Button = (props) => {
    return(
            <button onClick={props.handleClick}>{props.text}</button>
        )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //const addToGood = () => {
    //    setGood(good + 1)
    //}

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text = "good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text = "bad"/>
            <h1>statistics</h1>
            <br/>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>

    )
}

export default App
