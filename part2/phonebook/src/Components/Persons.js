import React from "react"
import phonebookService from "../Services/phonebookService";
const Persons = (props) => {
    const deleteUser = (person) =>{
        if(window.confirm(`Do you really want to Delete ${person.name}?`)){
            phonebookService
                .deletePerson(person.id)
                .then(r=>console.log(r))
        }
    }
    return(
        <div>
            {props.namesToShow.map(person =>
                    <div><p >{person.name} {person.number} <button onClick={() => deleteUser(person)}>delete</button></p></div>
                )}
        </div>
    )
}
export default Persons