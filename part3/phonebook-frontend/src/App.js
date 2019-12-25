import React, { useState, useEffect } from 'react'
import './App.css'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personServices from './services/persons'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ colorMessage, setColorMessage ] = useState(true)

  useEffect(() => {
    personServices
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
  console.log('response', persons.length, 'persons')  

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  const addNewPerson = (event) => {
    event.preventDefault()

    const found = persons.find(person => person.name === newName);
    if(found) {
      const updatePerson = window.confirm(`${found.name} is already in the phonebook,` + 
        ` replace the old number (${found.number})` +
        ` with the new number (${newNumber})?`)
      if (updatePerson){
        const changedPerson = { ...found, number: newNumber }
        personServices
          .update(changedPerson.id, changedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== response.id ? person : response))
            setMessage(`Updated ${newName}`)
            setColorMessage(false)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(_ => {
            setMessage(
              `Information of ${newName} was already removed from server`
            )
            setColorMessage(true)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.filter(person => person.id !== changedPerson.id))
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personServices
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setMessage(`Added ${newName}`)
          setColorMessage(false)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(error.response.data.error.message)
          setColorMessage(true)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }
  
  const deletePerson = (id, confirm) => {
    const found = persons.find(person => person.id === id);
    if (confirm) {
      personServices
      .deleteObject(id)
      .then(_ => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${found.name}`)
          setColorMessage(true)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
      })
      .catch(_ => {
        setMessage(
          `Information of ${found.name} was already removed from server`
        )
        setColorMessage(true)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} color={colorMessage} />
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
