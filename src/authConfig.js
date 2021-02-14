// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        // clientId: "67d771c4-85a1-4998-83e5-d81a6791aab9",
        // authority: "https://login.microsoftonline.com/33916d4c-0195-4131-ba41-7ae9e22d0a68",
        // redirectUri: "http://localhost:3000/",
        // postLogoutRedirectUri: "/"
        clientId: "ff50b422-390f-422c-bd8e-0f3383725ae7",
        authority: "https://login.microsoftonline.com/33916d4c-0195-4131-ba41-7ae9e22d0a68",
        redirectUri: "http://localhost:3000/"
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