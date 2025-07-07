import { createContext, useState } from "react";

const NotesContext = createContext();

function NotesProvider(props) {
    const API_URL = "https://111ca0521c5d7f7c2046cc2.free.beeceptor.com/api/notes/"

    const [notes, setNotes] = useState([]);
    const [hasError, setError] = useState(false);
    const [hasLoaded, setLoaded] = useState(false);

    const getNotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setNotes(data.reverse());
            setError(false);
            setLoaded(true);
        } catch (e) {
            console.log(e);
            setError(true);
        }
    };

    const addNote = async (newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote),
            });
            setNotes([newNote, ...notes]);
        } catch (e) {
            console.log(e);
        }
    };

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== updatedNote.id) return note;
            return updatedNote;
        });

        setNotes(updatedNotes);
    };
    return (
        <NotesContext.Provider value={{
            notes, getNotes, setNotes, updateNote, addNote,
            hasError, hasLoaded, setError, setLoaded,
        }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }