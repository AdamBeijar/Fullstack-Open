import React from "react"


const Course = (props) => {
    return (
        <div>filter shown with <input onChange={props.handleFilterChange}/></div>
    )
}

export default Course