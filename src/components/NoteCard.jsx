import { useContext } from "react"
import "./NoteCard.css"
import { NotesContext } from "../context/NotesContext"
function NoteCard({ note }) {
    const {updateNote} = useContext(NotesContext)  
    const handleInput = (e) => {
        const updatedNote = {
            ...note,
            title: e.target.value
        }   
        updateNote(updatedNote)
    }
    const handleCheckbox = (e) => {
        const updatedNote = {
            ...note,
            marked: e.target.checked
        }
        updateNote(updatedNote)
    }

    return (
        <article className="note-card">
            <input type="text" className="card-title" value={note.title} onChange={handleInput} />
            <input type="checkbox" checked={note.marked} onChange={handleCheckbox} />
        </article>
        

    )
}

export default NoteCard