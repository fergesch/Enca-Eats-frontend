// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../components/Header/Header';

import SearchPage from './SearchPage/SearchPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import AccountPage from './AccountPage/AccountPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// MSAL imports
import { MsalProvider, MsalContext, } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../utils/MsGraphApiCall";

class App extends Component {


  state = {
    account: null
  }

  setAccount = (resp) => {
    let logInResponse = resp
    if(logInResponse){
      this.setState({account: logInResponse.account})
    }
  }

  componentDidMount() {
    let logInResponse = sessionStorage.getItem('logInResponse')
    if(logInResponse){
      this.setState({account: JSON.parse(logInResponse).account})
    }
    
  }

  render() {
    return (
      <BrowserRouter>
        <MsalProvider instance={this.props.pca}>
          <div>
            <Header setAccount={this.setAccount}/>

            <Route path='/' exact component={SearchPage} />
            <Route path='/restaurant' exact component={RestaurantPage} />
            <Route path='/account' exact component={AccountPage} />

          </div >
        </MsalProvider>
      </BrowserRouter>
    );
  }
}

export default App;
