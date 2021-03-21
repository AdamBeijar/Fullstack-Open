import React, { useState } from 'react'

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
            <div>filter shown with <input onChange={handleFilterChange}/></div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <br/>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {namesToShow.map(person =>
                <div><p>{person.name} {person.number}</p></div>
            )}
        </div>
    )
}

export default App
