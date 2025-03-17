import { gapi } from 'gapi-script';
import './App.css';
import LoginButton from  './Components/login';
import LogoutButton from  './Components/logout';
import { useEffect } from 'react';


const clientId = "512513259833-o8cr1e7du3tgc9ead94vr6da5vca27c4.apps.googleusercontent.com"

function App(){
useEffect(() =>{
  function start() {
    gapi.client.init({
      clientId: clientId,
      scope: ""
    })
  };
  gapi.load('client:auth2',start);
});

  return(
  <div className='App'>
    <LoginButton />
    <LogoutButton />

  </div>
  );
}



export default App;