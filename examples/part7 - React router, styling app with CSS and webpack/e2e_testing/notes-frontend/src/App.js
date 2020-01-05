import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import NoteForm from './components/NoteForm'
import noteService from './services/notes'
import loginService from './services/login'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorType, setErrorType] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const noteFormRef = React.createRef()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const usr = JSON.parse(loggedUserJSON)

      noteService.setToken(usr.token)
      setUser(usr)
      setErrorMessage(`Welcome ${usr.username}`)
      setErrorType(false)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(_ => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setErrorType(true)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    noteFormRef.current.toggleVisibility()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: false
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const rows = () => notesToShow.map(note =>
    <Note key={note.id} note={note}
      toggleImportance={() => toggleImportanceOf(note.id)} />
  )

  const loginForm = () => (
    <Togglable buttonLabel='log in'>
      <LoginForm username={username} password={password} handleLogin={handleLogin}
        setUsername={setUsername} setPassword={setPassword} />
    </Togglable>
  )

  const logoutForm = () => (
    <LogoutForm handleLogout={handleLogout} />
  )

  const noteForm = () => (
    <Togglable buttonLabel='new note' ref={noteFormRef}>
      <NoteForm newNote={newNote} handleNoteChange={handleNoteChange} addNote={addNote} />
    </Togglable>
  )

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const usr = await loginService.login({ username, password })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(usr))
      noteService.setToken(usr.token)

      setUser(usr)
      setUsername('')
      setPassword('')
      setErrorMessage(`Welcome ${usr.username}`)
      setErrorType(false)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setErrorType(true)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    setErrorMessage(`Bye ${user.username}`)
    setUser(null)
    window.localStorage.clear()
    setErrorType(false)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} errorType={errorType} />
      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} logged in {logoutForm()}</p>
          {noteForm()}
        </div>
      }
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <Footer />
    </div>
  )
}

export default App
