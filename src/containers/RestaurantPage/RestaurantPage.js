import React, {Component} from "react";
import Restaurant from "../../components/Restaurant/Restaurant";
// import axios from "axios";
import API from '../../utils/Api';
import {toggleUserInteraction} from '../../utils/ChangeHandlers';

class RestaurantPage extends Component {
  state = {
    restaurants: {
      id: "",
      alias: "",
      name: "",
      image_url:
        "",
      is_closed: false,
      url:
        "",
      review_count: null,
      categories: [],
      rating: null,
      coordinates: {latitude: null, longitude: null},
      transactions: [],
      price: "",
      location: {},
      phone: "",
      display_phone: "",
      distance: null,
      neighborhood: "",
      userInteractions: {
        user_id: "",
        rest_alias: "",
        wish_list: {datetime: null, bool: null},
        visited: {datetime: null, bool: null},
        notes: [],
      },
    },
  };

  componentDidMount() {
    let param_map = {};
    for (let element of new URLSearchParams(this.props.location.search).entries()) {
      param_map[element[0]] = element[1];
    }

    API
      .get("/restaurant", {
        params: param_map
      })
      .then(response => {
        this.setState({restaurants: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  toggleHandler = (type) => {
    let restaurants = {...this.state.restaurants};
    toggleUserInteraction(restaurants, type)
    this.setState({restaurants: restaurants});
  };

  render() {
    return (
      <div>
        <Restaurant
          restaurant={this.state.restaurants}
          toggleHandler={this.toggleHandler}
        />
      </div>
    );
  }
}

export default RestaurantPage;
