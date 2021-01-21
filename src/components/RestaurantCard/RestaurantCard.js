import "./RestaurantCard.css";
import GenericButton from "../GenericButton/GenericButton";
import React from "react";
import {Link} from "react-router-dom";

function RestaurantCard(props) {
  const {
    alias,
    name,
    image_url,
    neighborhood,
    rating,
    url,
    categories,
    userInteractions,
  } = props.restaurant;
  const {wish_list, notes, visited} = userInteractions;

  console.log(notes)

  let cat_titles = categories.map((cat) => {
    return cat.title;
  });

  return (
    <div className="restaurantCard">
      <div>
        <Link
          to={{
            pathname: "/restaurant",
            // hash: '#submit',
            search: "?alias=" + alias,
          }}
        >
          <img alt="yelpPic" className="thumbnail" src={image_url} />
        </Link>
      </div>
      <div>
        <Link
          to={{
            pathname: "/restaurant",
            // hash: '#submit',
            search: "?alias=" + alias,
          }}
        >
          {name}
        </Link>
      </div>
      <div>{neighborhood}</div>
      <div>{rating}</div>
      <div>{cat_titles.join(", ")}</div>
      <div>
        <a target="_blank" rel="noreferrer" href={url}>
          Yelp Page
        </a>
      </div>
      <div>
        <GenericButton
          index={props.index}
          type="wish_list"
          bool={wish_list.bool}
          toggleHandler={props.toggleHandler}
        />
      </div>
      <div>
        <GenericButton
          index={props.index}
          type="visited"
          bool={visited.bool}
          toggleHandler={props.toggleHandler}
        />
      </div>
    </div>
  );
}

export default RestaurantCard;
