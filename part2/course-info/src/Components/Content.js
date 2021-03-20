import React from "react"
import Part from "./Part"

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key ={part.id} name = {part.name} exercises={part.exercises}/>)}
            <h3>total of {course.parts.reduce((s, n)=> s + n.exercises, 0)}</h3>
        </div>
    )
}

export default Content