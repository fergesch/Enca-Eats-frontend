import "./Restaurant.css";
import GenericButton from "../GenericButton/GenericButton";
import NoteCard from "../NoteCard/NoteCard";

export default function Restaurant(props) {
  const {
    name,
    image_url,
    neighborhood,
    rating,
    url,
    categories,
    userInteractions,
    location,
  } = props.restaurant;
  let {wish_list, notes, visited} = userInteractions;

  notes.sort((a,b) => b.datetime - a.datetime)

  let cat_titles = categories.map((cat) => {
    return cat.title;
  });

  let address = "";
  if(location.display_address) {
    address = location.display_address.map((line, index) => (
            <p className="address">{line}</p>
        ))
  }

  return (
    <div className="restaurantPage">
      <div className="restaurant-info">
        <img alt="yelpPic" className="image" src={image_url} />
        <div>
          <h1>{name}</h1>
          <div>
            <p>{neighborhood}</p> 
            {address}
          </div>
          <p>Yelp Rating: {rating}</p>
          <p>Categories: {cat_titles.join(", ")}</p>
          <a target="_blank" rel="noreferrer" href={url}>
            Yelp Page
          </a>
        </div>
        <div>
          <GenericButton
            type="wish_list"
            bool={wish_list.bool}
            toggleHandler={props.toggleHandler}
          />
        </div>
        <div>
          <GenericButton
            type="visited"
            bool={visited.bool}
            toggleHandler={props.toggleHandler}
          />
        </div>
      </div>
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
    </div>
  );
}
