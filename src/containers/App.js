// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../components/Header/Header';

import SearchPage from './SearchPage/SearchPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import AccountPage from './AccountPage/AccountPage';
import { BrowserRouter, Route } from 'react-router-dom';

// MSAL imports
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import Typography from "@material-ui/core/Typography";

class App extends Component {


  // state = {
  //   account: null
  // }

  // setAccount = (resp) => {
  //   let logInResponse = resp
  //   if(logInResponse){
  //     this.setState({account: logInResponse.account})
  //   }
  // }

  // componentDidMount() {
  //   let logInResponse = sessionStorage.getItem('logInResponse')
  //   console.log('Reload check')
  //   console.log(logInResponse)
  //   if(logInResponse){
  //     console.log('True Test')
  //     this.setState({account: JSON.parse(logInResponse).account})
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <MsalProvider instance={this.props.pca}>
          <div>
            <Header />

            <AuthenticatedTemplate>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/restaurant' component={RestaurantPage} />
            <Route exact path='/account' component={AccountPage} />
            {/* <Route exact path='/' render={() => <SearchPage account={this.state.account}/>} />
            <Route exact path='/restaurant' render={() => <RestaurantPage account={this.state.account}/>} />
            <Route exact path='/account' render={() => <AccountPage account={this.state.account}/>} />
            <p>{JSON.stringify(this.state)}</p> */}

            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
            <Typography variant="h6">
              <center>Please sign-in.</center>
            </Typography>
          </UnauthenticatedTemplate>

          </div >
        </MsalProvider>
      </BrowserRouter>
    );
  }
}

export default App;
