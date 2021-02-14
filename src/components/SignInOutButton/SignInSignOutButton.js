import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

const SignInSignOutButton = (props) => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return <SignOutButton />;
    } else {
        return <SignInButton setAccount={props.setAccount}/>;
    }
}

export default SignInSignOutButton;