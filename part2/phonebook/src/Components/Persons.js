import React from "react"

const Persons = (props) => {
    return(
        <div>
            {props.namesToShow.map(person =>
                    <div><p >{person.name} {person.number}</p></div>
                )}
        </div>
    )
}
export default Persons