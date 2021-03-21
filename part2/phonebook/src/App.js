import React, { useState, useEffect } from 'react'
import phonebookService from "./Services/phonebookService";
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ show, setShow ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')
    const messageStyle = {
        backgroundColor: "lightgray",
        border: "1px black solid",
        color: "green",
        fontsize:22
    }
    useEffect(()=>{
        phonebookService
            .getAll()
            .then(response =>{
                setPersons(response.data)
            })
    }, [])
    const updateNumber = (person, newNumber) =>{
        if(window.confirm(`${person.name} already exists, do you want to update the Phone number of ${person.name}`)){
            phonebookService
                .updatePhoneNumber(person.id, newNumber)
                .then(response => setPersons(persons.map(note => note.id !== person.id ? note : response.data)))
                .then(message =>{
                    setMessage(`Updated ${person.name}'s phone number to ${newNumber}`)
                    setTimeout(()=>{
                        setMessage('')
                    }, 2000)
                })
        }
    }
    const updateErrorMessage = (person) => {
        setErrorMessage(`Error, information of ${person.name} has already been removed from server`)
        setTimeout(()=>{
            setErrorMessage('')
        }, 2000)
    }
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
            phonebookService
                .create(personObject)
                .then(response=>{console.log(response)})
                .then(message =>{
                    setMessage(`Added ${personObject.name}`)
                    setTimeout(()=>{
                        setMessage('')
                    }, 2000)
                })
        } else {
            const person = persons.find(p => p.name === newName)
            updateNumber(person, newNumber)
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
            <p style={messageStyle}>{message}</p>
            <Filter handleFilterChange={handleFilterChange}/>
            <h2>add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
            <h2>Numbers</h2>
            <Persons key = {namesToShow} namesToShow={namesToShow} updateErrorMessage={updateErrorMessage}/>
        </div>
    )
}

export default App
