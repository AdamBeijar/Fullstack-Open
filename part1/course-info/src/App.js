import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part = {props.parts[0]}/>
            <Part part = {props.parts[1]}/>
            <Part part = {props.parts[2]}/>
        </div>
    )
}
const Total = (props) => {
    let total = 0
    props.total.forEach(item => {
        total += item.exercises
    })
    console.log(total)
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

  return (
      <div>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total total = {course.parts} />
      </div>
  )
}

export default App