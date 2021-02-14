// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "ff50b422-390f-422c-bd8e-0f3383725ae7",
        authority: "https://login.microsoftonline.com/33916d4c-0195-4131-ba41-7ae9e22d0a68",
        redirectUri: process.env.REACT_APP_REDIRECT_URI
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};