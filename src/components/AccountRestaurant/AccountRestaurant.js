import "./AccountRestaurant.css";

import React from "react";
import {Link} from "react-router-dom";

function AccountRestaurant(props) {
    const {
        alias,
        name,
        image_url,
        neighborhood,
        url,
        categories,
    } = props.restaurant;


    let cat_titles = categories.map((cat) => {
        return cat.title;
    });


    return (
        <div className="restaurantCard">
            <div>
                <Link
                    to={{
                        pathname: "/restaurant",
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
                        search: "?alias=" + alias,
                    }}
                >
                    {name}
                </Link>
            </div>
            <div>{neighborhood}</div>
            <div>{cat_titles.join(", ")}</div>
            <div>
                <a target="_blank" rel="noreferrer" href={url}>
                    Yelp Page
                </a>
            </div>
        </div>
    )


}

export default AccountRestaurant