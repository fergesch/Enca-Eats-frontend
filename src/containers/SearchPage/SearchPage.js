import React, {Component} from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchDropdowns from "../../components/SearchDropdowns/SearchDropdowns";
import API from "../../utils/Api";
import {toggleUserInteraction} from '../../utils/ChangeHandlers';

// function App() {
class SearchPage extends Component {
  state = {
    restaurants: [
      {
        id: "TAueIovlJFslHSVEfnAaaA",
        alias: "dryhop-brewers-chicago",
        name: "DryHop Brewers",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/bphoto/Eb0McDi48qWYhPnIaK8i-Q/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/dryhop-brewers-chicago?adjust_creative=ZzZ3ffcKnwQmN827qh1vKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ZzZ3ffcKnwQmN827qh1vKw",
        review_count: 771,
        categories: [
          {
            alias: "breweries",
            title: "Breweries",
          },
          {
            alias: "newamerican",
            title: "American (New)",
          },
        ],
        rating: 4,
        coordinates: {
          latitude: 41.9392443174878,
          longitude: -87.6442063962951,
        },
        transactions: ["delivery", "pickup"],
        price: "$$",
        location: {
          address1: "3155 N Broadway",
          address2: "",
          address3: "",
          city: "Chicago",
          zip_code: "60657",
          country: "US",
          state: "IL",
          display_address: ["3155 N Broadway", "Chicago, IL 60657"],
        },
        phone: "+17738573155",
        display_phone: "(773) 857-3155",
        distance: 4698.23608916659,
        neighborhood: "Lake View",
        _rid: "tJleAOrMycgxCAAAAAAAAA==",
        _self: "dbs/tJleAA==/colls/tJleAOrMycg=/docs/tJleAOrMycgxCAAAAAAAAA==/",
        _etag: '"bd01f2de-0000-0300-0000-5ff228f20000"',
        _attachments: "attachments/",
        _ts: 1609705714,
        userInteractions: {
          wish_list: {},
          visited: {},
          notes: [],
        },
      },
      {
        id: "TAueIovlJFslHSVEfnAaaA",
        alias: "dryhop-brewers-chicago",
        name: "DryHop Brewers",
        image_url:
          "https://s3-media4.fl.yelpcdn.com/bphoto/Eb0McDi48qWYhPnIaK8i-Q/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/dryhop-brewers-chicago?adjust_creative=ZzZ3ffcKnwQmN827qh1vKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ZzZ3ffcKnwQmN827qh1vKw",
        review_count: 771,
        categories: [
          {
            alias: "breweries",
            title: "Breweries",
          },
          {
            alias: "newamerican",
            title: "American (New)",
          },
        ],
        rating: 4,
        coordinates: {
          latitude: 41.9392443174878,
          longitude: -87.6442063962951,
        },
        transactions: ["delivery", "pickup"],
        price: "$$",
        location: {
          address1: "3155 N Broadway",
          address2: "",
          address3: "",
          city: "Chicago",
          zip_code: "60657",
          country: "US",
          state: "IL",
          display_address: ["3155 N Broadway", "Chicago, IL 60657"],
        },
        phone: "+17738573155",
        display_phone: "(773) 857-3155",
        distance: 4698.23608916659,
        neighborhood: "Lake View",
        _rid: "tJleAOrMycgxCAAAAAAAAA==",
        _self: "dbs/tJleAA==/colls/tJleAOrMycg=/docs/tJleAOrMycgxCAAAAAAAAA==/",
        _etag: '"bd01f2de-0000-0300-0000-5ff228f20000"',
        _attachments: "attachments/",
        _ts: 1609705714,
        userInteractions: {
          user_id:"test_user_id",
          rest_alias: "dryhop-brewers-chicago",
          wish_list:{datetime:1610415400221,bool:true},
          visited:{datetime:1610415440697,"bool":true},
          notes:[{datetime:1610243753000,value:"here is a sample first review"},
            {datetime:1610243763000,value:"adding a review from the endpoint"},
            {datetime:1610313738000,value:"this is a second note on the same restaurant"}],
          id:"0e5f171a-2d9c-4497-972b-25f2a8a1c934"
        },
      },
    ],
    dropdown: {
      neighborhoods: {
        all: [],
        selected: [],
      },
      categories: {
        all: [],
        selected: [],
      },
      rating: {
        all: [
          {alias: 0, title: 0},
          {alias: 0.5, title: 0.5},
          {alias: 1, title: 1},
          {alias: 1.5, title: 1.5},
          {alias: 2, title: 2},
          {alias: 2.5, title: 2.5},
          {alias: 3, title: 3},
          {alias: 3.5, title: 3.5},
          {alias: 4, title: 4},
          {alias: 4.5, title: 4.5},
          {alias: 5, title: 5},
        ],
        selected: [],
      },
      wish_list: {
        all: [
          {alias: "No", title: "No"},
          {alias: "Yes", title: "Yes"},
        ],
        selected: [],
      },
      visited: {
        all: [
          {alias: "No", title: "No"},
          {alias: "Yes", title: "Yes"},
        ],
        selected: [],
      },
      price: {
        all: [
          {alias: "$", title: "$"},
          {alias: "$$", title: "$$"},
          {alias: "$$$", title: "$$$"},
          {alias: "$$$$", title: "$$$$"},
        ],
        selected: [],
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
      dropdown.neighborhoods.all = neighborhoods.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      dropdown.categories.all = categories.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      this.setState({dropdown: dropdown});
    });
  }

  toggleHandler = (type, i) => {
    const index = typeof i == "undefined" ? 0 : i;
    let restaurants = [...this.state.restaurants];
    let restaurant = restaurants[index];
    toggleUserInteraction(restaurant, type)
    this.setState({restaurants: restaurants});
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
    console.log("Delete Clicked");
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

  render() {
    return (
      <div>
        <SearchDropdowns
          dropdown={this.state.dropdown}
          handleChange={this.handleSelectChange}
          handleDelete={this.handleDelete}
        />

        <SearchResults
          restaurants={this.state.restaurants}
          toggleHandler={this.toggleHandler}
        />
        {/* <p>{this.state.dropdown}</p> */}
      </div>
    );
  }
}

export default SearchPage;
