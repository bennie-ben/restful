import React from 'react';
import { Link } from "react-router-dom";

class UserProfile extends React.Component{

  render(){
    return(
      <div className="userClass">
        <img src="" alt="No Image Yet"></img>
        <p>UserName</p>
        <p>Email</p>
        <p>Bios</p>
      </div>
    );
  }
}

export default UserProfile;