import React, { useState } from 'react'
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ show, setShow ] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName, number: newNumber
        }
        const p = persons.map(person => person.name)
        if(!p.includes(personObject.name)){
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} already exists`)
        }
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        setShow(event.target.value)
    }
    const namesToShow = persons.filter(person => person.name.includes(show))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilterChange={handleFilterChange}/>
            <h2>add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
            <h2>Numbers</h2>
            <Persons namesToShow={namesToShow}/>
        </div>
    )
}

export default App
