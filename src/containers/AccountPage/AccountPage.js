import React, { Component } from "react";
import "./AccountPage.css";
import API from "../../utils/Api";
import AccountRestaurant from "../../components/AccountRestaurant/AccountRestaurant";

class AccountPage extends Component {
    state = {
        account: {
            email: '',
            name: ''
        },
        userInteractions: {
            wish_list: [],
            notes: [],
            visited: []
        }
    }
    componentDidMount() {
        //want to do multi request promise like SearchPage
        //request for account and userinteractions
        function getAccount() {
            return API.get("/user");
          }
      
          function getUserInteractions() {
            return API.get("/userInteractions");
          }
        Promise.all([getAccount(), getUserInteractions()]).then((results) => {
            const account = results[0].data;
            const userInteractions = results[1].data;
      
            this.setState({account: account, userInteractions: userInteractions});
          });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">Info
                        <p>{this.state.account.name}</p>
                        <p>{this.state.account.email}</p>
                    </div>

                    <div className="box">Wish List
                        {
                            this.state.userInteractions.wish_list.map((r, index) => (
                                <AccountRestaurant restaurant={r} />
                            ))}
                    </div>
                </div>
                <div className="row">
                    <div className="box">Visited
                        {
                            this.state.userInteractions.visited.map((r, index) => (
                                <AccountRestaurant restaurant={r} />
                            ))}

                    </div>
                    <div className="box">Notes
                        {
                            this.state.userInteractions.notes.map((r, index) => (
                                <AccountRestaurant restaurant={r} />
                            ))}
                    </div>
                </div>


            </div>
        )

    }
}

export default AccountPage;
