import React, { Component } from "react";
import "./AccountPage.css";
import API from '../../utils/Api';
import AccountRestaurant from "../../components/AccountRestaurant/AccountRestaurant";

class AccountPage extends Component {

    state = {
        account: null,
        userInteractions: {
            wish_list: [],
            notes: [],
            visited: []
        }
    }

    componentDidMount() {
        //want to do multi request promise like SearchPage
        //request for account and userinteractions
        API
            .get("/userInteractions")
            .then(response => {
                this.setState({
                    // account: set to user data from response,
                    userInteractions: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">Info
                        <p>Erica</p>
                        <p>525 W Oakdale Ave</p>
                        <p>Chicago, IL</p>
                        <p>60657</p>
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

export default AccountPage