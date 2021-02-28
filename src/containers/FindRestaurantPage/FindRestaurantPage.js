import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import API from "../../utils/Api";
import "./FindRestaurantPage.css";
import SearchResults from "../../components/SearchResults/SearchResults";
import { toggleUserInteraction } from "../../utils/ChangeHandlers";

class FindRestaurantPage extends Component {

    state = {restaurants: []};
    
    handleChange = (event) =>  {
        this.setState({ input: event.target.value });
    };

    handleClick = (event) => {
        API.get("/restaurant/find", {  
            params: {name: this.state.input}
        })
        .then((response) => {
            this.setState({restaurants: [...response.data]})
        })
        .catch(function (error) {
          console.log(error);
          alert("No restaurants found. Try again :(")
        })
    };

    toggleHandler = (type, i) => {
        const index = typeof i == "undefined" ? 0 : i;
        let restaurants = [...this.state.restaurants];
        let restaurant = restaurants[index];
        toggleUserInteraction(restaurant, type);
        this.setState({ restaurants: restaurants });
  };

    render() {
        return (
            <div className="find">
                <TextField label="Name" type="text" id="restaurant_name" onChange={this.handleChange }/>
                <Button variant="contained" color="primary" onClick={this.handleClick}>Search</Button>
                {this.state.restaurants.length > 0 &&
                    <SearchResults 
                        restaurants={this.state.restaurants}
                        toggleHandler={this.toggleHandler}/>
                }
            </div>
        )
    }
}

export default FindRestaurantPage;