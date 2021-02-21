import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import API from '../../utils/Api'

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {

        instance.loginPopup().then(response => {
            sessionStorage.setItem('logInResponse', JSON.stringify(response.account))
            window.location.reload();
            // props.setAccount(response)
            const {name, username} = response.account
            API
                .post("/user/login", {name: name, email: username})
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    return (
        <div>
            <Button
                onClick={handleLogin}
                color="inherit"
            >
                Login
            </Button>
{/* <button onClick={() => handleLogin()}>Login</button> */}
        </div>
    )
};