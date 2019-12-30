import React from 'react'
import { createNote } from '../reducers/noteReducer'

const NewNote = ({ store }) => {
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    store.dispatch(
      createNote(content)
    )
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote
