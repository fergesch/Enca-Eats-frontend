import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchDropdowns from "../../components/SearchDropdowns/SearchDropdowns";
import API from "../../utils/Api";
import {sortString, isObjEqual} from "../../utils/Utils";
import {toggleUserInteraction} from "../../utils/ChangeHandlers";
import "./SearchPage.css";

class SearchPage extends Component {
  state = {
    restaurants: [],
    restaurants_display: [],
    filters: {},
    dropdown: {
      neighborhoods: {
        all: [],
        selected: [],
        type: "multiple",
      },
      categories: {
        all: [],
        selected: [],
        type: "multiple",
      },
      rating: {
        all: [
          {alias: "", title: ""},
          {alias: "0", title: "0"},
          {alias: "0.5", title: "0.5"},
          {alias: "1", title: "1"},
          {alias: "1.5", title: "1.5"},
          {alias: "2", title: "2"},
          {alias: "2.5", title: "2.5"},
          {alias: "3", title: "3"},
          {alias: "3.5", title: "3.5"},
          {alias: "4", title: "4"},
          {alias: "4.5", title: "4.5"},
          {alias: "5", title: "5"},
        ],
        selected: "",
        type: "single",
      },
      wish_list: {
        all: [
          {alias: "", title: ""},
          {alias: "false", title: "No"},
          {alias: "true", title: "Yes"},
        ],
        selected: "",
        type: "single",
      },
      visited: {
        all: [
          {alias: "", title: ""},
          {alias: "false", title: "No"},
          {alias: "true", title: "Yes"},
        ],
        selected: "",
        type: "single",
      },
      price: {
        all: [
          {alias: "$", title: "$"},
          {alias: "$$", title: "$$"},
          {alias: "$$$", title: "$$$"},
          {alias: "$$$$", title: "$$$$"},
        ],
        selected: [],
        type: "multiple",
      },
    },
  };

  componentDidMount() {
    let dropdown = {...this.state.dropdown};

    function getNeighborhoods() {
      return API.get("/neighborhood");
    }

    function getCategories() {
      return API.get("/categories");
    }

    Promise.all([getNeighborhoods(), getCategories()]).then((results) => {
      const neighborhoods = results[0].data;
      const categories = results[1].data;
      dropdown.neighborhoods.all = neighborhoods.sort(sortString);
      dropdown.categories.all = categories.sort(sortString);

      this.setState({dropdown: dropdown});
    });
  }

  toggleHandler = (type, i) => {
    const index = typeof i == "undefined" ? 0 : i;
    let restaurants = [...this.state.restaurants_display];
    let restaurant = restaurants[index];
    toggleUserInteraction(restaurant, type);
    this.setState({restaurants_display: restaurants});
  };

  handleSelectChange = (event) => {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    let dropdown = {...this.state.dropdown};
    dropdown[name]["selected"] = value;
    this.setState({dropdown: dropdown});
  };

  handleDelete = (event) => {
    const target = event.target;
    const key = target.key;
    const name = target.name;

    let dropdown = {...this.state.dropdown};

    const index = dropdown[name]["selected"].indexOf(key);
    if (index > -1) {
      dropdown[name]["selected"].splice(index, 1);
    }

    this.setState({dropdown: dropdown});
  };

  handleSearch = () => {
    let rest_amt = 3;
    const keys = Object.keys(this.state.dropdown);
    let param_map = {};

    keys.map((key, index) => {
      const all_list = this.state["dropdown"][key]["selected"];
      if (all_list.length > 0) {
        if (typeof all_list === "string") {
          param_map[key] = all_list;
        } else {
          param_map[key] = all_list.join();
        }
      }
      return true;
    });

    if (
      isObjEqual(param_map, this.state.filters) &&
      this.state.restaurants.length >= rest_amt
    ) {
      let rest_all = [...this.state.restaurants];
      let rest_disp = [];
      for (let i = 0; i < rest_amt; i++) {
        let rand = Math.floor(Math.random() * rest_all.length);
        rest_disp[rest_disp.length] = rest_all.splice(rand, 1)[0];
      }
      this.setState({
        restaurants: rest_all,
        restaurants_display: rest_disp,
      });
    } else {
      this.setState({filters: param_map});

      API.get("/restaurant/search", {
        params: param_map,
      })
        .then((response) => {
          let rest_all = [...response.data];
          let rest_disp = [];
          for (let i = 0; i < rest_amt && rest_all.length > 0; i++) {
            let rand = Math.floor(Math.random() * rest_all.length);
            rest_disp[rest_disp.length] = rest_all.splice(rand, 1)[0];
          }

          this.setState({
            restaurants: rest_all,
            restaurants_display: rest_disp,
          });
        })
        .catch(function (error) {
          console.log(error);
          alert("No restaurants found. Try again :(")
        })
    }
    return true;
  };

  render() {
    return (
      <div className="SearchPage">
        <SearchDropdowns
          dropdown={this.state.dropdown}
          handleChange={this.handleSelectChange}
          handleDelete={this.handleDelete}
        />
        <Button variant="contained" color="primary" onClick={this.handleSearch}>
          Search
        </Button>
        <SearchResults
          restaurants={this.state.restaurants_display}
          toggleHandler={this.toggleHandler}
        />
      </div>
    );
  }
}

export default SearchPage;
