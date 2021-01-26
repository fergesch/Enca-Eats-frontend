// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../components/Header/Header';

import SearchPage from './SearchPage/SearchPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import AccountPage from './AccountPage/AccountPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route path='/' exact component={SearchPage} />
          <Route path='/restaurant' exact component={RestaurantPage} />
          <Route path='/account' exact component={AccountPage} />

        </div >
      </BrowserRouter>
    );
  }
}

export default App;
