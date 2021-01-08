import "./RestaurantCard.css";
import GenericButton from '../GenericButton/GenericButton'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from "react";


function RestaurantCard(props) {

    const { name, image_url, neighborhood, rating, url, categories, userInteractions} = props.restaurant;
    const { wishList, notes, visited } = userInteractions;

    let cat_titles = categories.map((cat) => {
        return cat.title;
    });

    return (
        <Container className="restaurantCard" fluid>
            <Row className="restaurantRow">
                <Col><img alt="yelpPic" className="thumbnail" src={image_url} /></Col>
                <Col>{name}</Col>
                <Col>{neighborhood}</Col>
                <Col>{rating}</Col>
                <Col>{cat_titles.join(", ")}</Col>
                <Col><a target='_blank' href={url}>Yelp Page</a></Col>
                <Col><GenericButton index={props.index} type="wishList" bool={wishList.bool} toggleHandler={props.toggleHandler} /></Col>
                <Col><GenericButton index={props.index} type="visited" bool={visited.bool} toggleHandler={props.toggleHandler} /></Col>
            </Row>
        </Container>
    );

}

export default RestaurantCard;