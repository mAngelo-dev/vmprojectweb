const authConfig = {
    signInRedirectURL: import.meta.env.VITE_SIGNIN_URL,
    signOutRedirectURL: import.meta.env.VITE_SIGNOUT_URL,
    clientID: import.meta.env.VITE_CLIENT_ID,
    baseUrl: import.meta.env.VITE_BASE_URL,
    scope: [ "openid", "address", "email", "groups", "phone", "profile", "roles"],
}

export default authConfig;