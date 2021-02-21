import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logout();
    }

    return (
        <div>
            <Button
                onClick={handleLogout}
                color="inherit"
            >
                Logout
            </Button>
        </div>
    )
};