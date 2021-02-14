import React, {Component} from "react";
import "./AccountPage.css";
import API from '../../utils/Api';
import AccountRestaurant from "../../components/AccountRestaurant/AccountRestaurant";

// Msal imports
// import { MsalAuthenticationTemplate, MsalContext } from "@azure/msal-react";
// import { InteractionType } from "@azure/msal-browser";
// import { loginRequest } from "../../authConfig";

// import { callMsGraph } from "../../utils/MsGraphApiCall";

// import { useIsAuthenticated } from "@azure/msal-react";


class AccountPage extends Component {

    // static contextType = MsalContext;

    state = {
        userInteractions: {
            wish_list: [],
            notes: [],
            visited: []
        }
    }

    componentDidMount() {
        API
            .get("/userInteractions")
            .then(response => {
                this.setState({userInteractions: response.data});
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