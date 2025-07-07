import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NotesContext } from "../context/NotesContext"

function HomePage() {
    const { notes, setNotes} = useContext(NotesContext)
    
    return (
        <>
        <HeaderComponent/>
            <div>HomePage</div>
        </>
    )
}

export default HomePage