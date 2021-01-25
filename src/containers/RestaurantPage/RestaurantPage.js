import React, {Component} from "react";
import Restaurant from "../../components/Restaurant/Restaurant";
// import axios from "axios";
import API from "../../utils/Api";
import {
  toggleUserInteraction,
  upsertUserInteraction,
} from "../../utils/ChangeHandlers";
import "./RestaurantPage.css";

class RestaurantPage extends Component {
  state = {
    restaurants: {
      id: "",
      alias: "",
      name: "",
      image_url: "",
      is_closed: false,
      url: "",
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
    newNote: {
      datetime: null,
      value: '',
    },
  };

  componentDidMount() {
    let param_map = {};
    for (let element of new URLSearchParams(
      this.props.location.search
    ).entries()) {
      param_map[element[0]] = element[1];
    }

    API.get("/restaurant", {
      params: param_map,
    })
      .then((response) => {
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
    toggleUserInteraction(restaurants, type);
    this.setState({restaurants: restaurants});
  };

  noteEditHandler = (index) => {
    let restaurants = {...this.state.restaurants};
    let note = restaurants.userInteractions.notes[index];
    if (note.editable) {
      upsertUserInteraction(restaurants.userInteractions);
    }
    note.editable = !note.editable;
    this.setState({restaurants: restaurants});
  };

  noteChangeHandler = (event) => {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    let restaurants = {...this.state.restaurants};
    let note = restaurants.userInteractions.notes[name];
    note.value = value;
    this.setState({restaurants: restaurants});
  };

  noteDeleteHandler = (index => {
    let restaurants = {...this.state.restaurants};
    restaurants.userInteractions.notes.splice(index,1);
    upsertUserInteraction(restaurants.userInteractions);
    this.setState({restaurants: restaurants});
  })

  newNoteChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;

    let newNote = {...this.state.newNote};
    newNote.value = value;
    newNote.datetime = Date.now();
    this.setState({newNote: newNote});

    console.log(event);
  };

  newNoteSubmitHandler = () => {
    let restaurants = {...this.state.restaurants};
    let userInteractions = restaurants.userInteractions;
    let newNote = {...this.state.newNote};
    userInteractions.notes[userInteractions.notes.length] = newNote;
    upsertUserInteraction(userInteractions);
    this.setState({
      restaurants: restaurants,
      newNote: {
        datetime: null,
        value: '',
      },
    });
  };

  render() {
    return (
      <div className="restaurantPage">
        <Restaurant
          restaurant={this.state.restaurants}
          newNote={this.state.newNote}
          toggleHandler={this.toggleHandler}
          noteEditHandler={this.noteEditHandler}
          noteChangeHandler={this.noteChangeHandler}
          noteDeleteHandler={this.noteDeleteHandler}
          newNoteChangeHandler={this.newNoteChangeHandler}
          newNoteSubmitHandler={this.newNoteSubmitHandler}
        />
      </div>
    );
  }
}

export default RestaurantPage;
