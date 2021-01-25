import "./NoteCard.css";

export default function NoteCard(props) {
  var date = new Date(props.datetime);
  var dateString = date.toLocaleString();

  return (
    <div className="noteCard">
      <div>{dateString}</div>
      <div>
        <textarea
          className="noteText"
          name={props.name}
          disabled={props.editable ? "" : "disabled"}
          onChange={props.noteChangeHandler}
          value={props.value}
        />
      </div>
      <div className="noteButtons">
        <button onClick={() => props.noteEditHandler(props.name)}>Edit</button>
        <button onClick={() => props.noteDeleteHandler(props.name)}>Delete</button>
      </div>
    </div>
  );
}
