import { GoogleLogin } from "react-google-login";


const clientId = "512513259833-o8cr1e7du3tgc9ead94vr6da5vca27c4.apps.googleusercontent.com";

function login(){


    const onSuccess = (res) => {
        console.log("Login Success! Current User : ",res.profileObj);
    }
    const onFailure= (res) => {
        console.log("Login Failed!res : ",res);
    }
    return(
        <div id="signInButton">
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host-origin'}
            isSignedIn={true}
            />
        </div>
    )
}


export default login;