// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../components/Header/Header';

import SearchPage from './SearchPage/SearchPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import axios from 'axios';

// function App() {
class App extends Component {

  render() {
    // axios
    // .get("https://enca-eats-backend.azurewebsites.net/restaurant", {
    //   params: {
    //     alias: "dryhop-brewers-chicago"
    //   },
    //   headers: {
    //     // 'Content-Type': null,
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });


    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route path='/' exact component={SearchPage} />
          <Route path='/restaurant' exact component={RestaurantPage} />

        </div >
      </BrowserRouter>
    );
  }
}

export default App;
