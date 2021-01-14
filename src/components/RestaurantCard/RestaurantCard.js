import "./RestaurantCard.css";
import GenericButton from '../GenericButton/GenericButton'
import React from "react";
import { Link } from 'react-router-dom';

function RestaurantCard(props) {

    const { alias, name, image_url, neighborhood, rating, url, categories, userInteractions } = props.restaurant;
    const { wishList, notes, visited } = userInteractions;

    let cat_titles = categories.map((cat) => {
        return cat.title;
    });

    return (
        <div className="restaurantCard">
            <div><img alt="yelpPic" className="thumbnail" src={image_url} /></div>
            <div><Link to={{
                        pathname: '/restaurant',
                        // hash: '#submit',
                        search: '?alias=' + alias
                    }}>
                        {name}
                    </Link></div>
            <div>{neighborhood}</div>
            <div>{rating}</div>
            <div>{cat_titles.join(", ")}</div>
            <div><a target='_blank' href={url}>Yelp Page</a></div>
            <div><GenericButton index={props.index} type="wishList" bool={wishList.bool} toggleHandler={props.toggleHandler} /></div>
            <div><GenericButton index={props.index} type="visited" bool={visited.bool} toggleHandler={props.toggleHandler} /></div>
        </div>
    );

}

export default RestaurantCard;