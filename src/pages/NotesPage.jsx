import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NotesContext } from "../context/NotesContext"
import NoteCard from "../components/NoteCard";

function NotesPage() {
  const {notes,setNotes} = useContext(NotesContext)
  console.log(notes);
  
  const NoteCards = notes[0].map((note)=>{
    return(
      <div key={note.id}>
        <NoteCard note={note} />
      </div>
    )
  }

  )
  return (
    <>
      <HeaderComponent />
      <div>NotesPage</div>
        {NoteCards}
    </>
  )
}

export default NotesPage