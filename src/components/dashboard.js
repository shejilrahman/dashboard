import React from "react";
import { GoogleLogin } from 'react-google-login';


function Dashboard() {
    
    return (
   <div>
        <GoogleLogin
  clientId="your-client-id"
  buttonText="Login with Google"
  onSuccess={responseGoogle}
  onFailure={responseGoogleFailure}
  cookiePolicy={'single_host_origin'}
/>

   </div>
    )
  }
  const responseGoogle = (response) => {
    console.log(response);
    // TODO: handle successful login
  };
  const responseGoogleFailure = (response) => {
    console.log(response);
    // Handle failure response here
  };
  export default Dashboard;
  