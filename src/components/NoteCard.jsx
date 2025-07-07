
function NoteCard({ note }) {
    return (
        <article className="note-card">
            <input type="text" className="card-title" value={note.title} />
            <input type="checkbox" checked={note.marked} />
        </article>

    )
}

export default NoteCard