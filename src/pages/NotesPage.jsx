import { use, useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NotesContext } from "../context/NotesContext"
import NoteCard from "../components/NoteCard";
import "./NotesPage.css"
import { Link } from "react-router-dom";
import CreateNote from "../components/CreateNote";

function NotesPage() {
  const { notes, getNotes, hasError, hasLoaded } = useContext(NotesContext)
  console.log(notes);

useEffect(() => {
  getNotes()
 }, [])


  const NoteCards = notes.map((note) => {
    return (
      <div key={note.id}>
      <li>
        <NoteCard note={note} />
      </li>
      </div>
    )
  }

  )
  return (
    <>
      <HeaderComponent />
      <div id="notes-page">
        <ul className="note-list">
        <CreateNote conHeader={false} />
        
          {hasError ? (
            <h2>No se han podido obtener las notas</h2>
          ) : !hasLoaded ? (
            <h2>Cargando...</h2>
          ) : (
            NoteCards
          )}
        </ul>
        <Link to="/create">Crear nota</Link>
      </div>
      <details>
        <summary>Ver código</summary>
        <pre>
          El codigo de este proyecto se encuentra en el siguiente repositorio:1
          </pre>
      </details>
    </>
  )
}

export default NotesPage