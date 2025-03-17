import { GoogleLogout } from "react-google-login";


const clientId = "512513259833-o8cr1e7du3tgc9ead94vr6da5vca27c4.apps.googleusercontent.com";

function logout() {
    const onSuccess =() => {
        console.log("logout Successfully!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout  
            clientId= {clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default logout;