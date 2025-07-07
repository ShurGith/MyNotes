import { createContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider(props) {
    const noteList = [
        {
            id: 1,
            title: "Ir a casa de amigo",
            marked: false
        }, 
        {
            id: 2,
            title: "Recordar comprar pan",
            marked: false
        }, 
        {
            id: 3,
            title: "Película Dune",
            marked: false
        }, 
        {
            id: 4,
            title: "Volver a casa de amigo",
            marked: false
        },
    ]
    const [notes, setNotes] = useState([noteList])

    return (
        <NotesContext.Provider value={{
            notes, setNotes,
        }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }