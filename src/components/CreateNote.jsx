import { useContext, useState } from 'react'
import { NotesContext } from '../context/NotesContext'
import HeaderComponent from './HeaderComponent'
import './CreateNote.css'

function CreateNote({conHeader = true}) {
    const {addNote} = useContext(NotesContext)

    const [noteTitle, setNoteTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!noteTitle) return
        const newNote = {
            id: Date.now(),
            title: noteTitle,
            marked: false
        }
        addNote(newNote)
        setNoteTitle("")
    }

  return (
    <>
    { conHeader && <HeaderComponent /> }

    <form className='note-form'>
      <input type="text" className='note-tile' placeholder='New Note' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
      <button className='create-btn'
      onClick={handleSubmit}
      >+</button>
    </form>
    </>
  )
}

export default CreateNote