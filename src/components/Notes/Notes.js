import NoteCard from "../NoteCard/NoteCard";
import './Notes.css'

export default function Notes(props) {
    let notes = [...props.notes];

    notes.sort((a, b) => b.datetime - a.datetime)
    return (
        <div className="notes">
            <div className="newNote">
                <div>New Review</div>
                <div>
                    <textarea
                        className="noteText"
                        onChange={props.newNoteChangeHandler}
                        value={props.newNote.value}
                    />
                </div>
                <div className="noteButtons">
                    <button onClick={props.newNoteSubmitHandler}>
                        Submit
                </button>
                </div>
            </div>
            {notes.map((n, index) => (
                <NoteCard
                    editable={n.editable}
                    key={index}
                    name={index}
                    datetime={n.datetime}
                    value={n.value}
                    noteChangeHandler={props.noteChangeHandler}
                    noteEditHandler={props.noteEditHandler}
                    noteDeleteHandler={props.noteDeleteHandler}
                />
            ))}
        </div>
    );
}