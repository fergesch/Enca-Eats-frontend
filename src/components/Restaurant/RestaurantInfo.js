import "./RestaurantInfo.css";
import GenericButton from "../GenericButton/GenericButton";

export default function RestaurantInfo(props) {
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
  let { wish_list, notes, visited } = userInteractions;

  notes.sort((a, b) => b.datetime - a.datetime)

  let cat_titles = categories.map((cat) => {
    return cat.title;
  });

  let address = "";
  if (location.display_address) {
    address = location.display_address.map((line, index) => (
      <p className="address">{line}</p>
    ))
  }

  return (
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
  );
}
