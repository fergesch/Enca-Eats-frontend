import "./RestaurantCard.css";
import GenericButton from "../GenericButton/GenericButton";
import React from "react";
import {Link} from "react-router-dom";

export default function RestaurantCard(props) {
  const {
    alias,
    name,
    price,
    image_url,
    neighborhood,
    rating,
    url,
    categories,
    userInteractions,
    location,
  } = props.restaurant;
  const {wish_list, visited} = userInteractions;


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
      <div>
        <p>{neighborhood}</p>
        {location.display_address.map((line, index) => (
            <p className="address">{line}</p>
        ))}
      </div>
      <div>{rating}</div>
      <div>{price}</div>
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