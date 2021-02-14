import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";


export const SignInButton = (props) => {
    const { instance } = useMsal();

    const handleLogin = () => {

            instance.loginPopup().then(response => {
                // sessionStorage.setItem('logInResponse', JSON.stringify(response))
                props.setAccount(response)
            });
    }

    return (
        <div>
            <Button
                onClick={() => handleLogin()}
                color="inherit"
            >
                Login
            </Button>

        </div>
    )
};