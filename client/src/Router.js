import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WriteNotes from "./Components/WriteNotes";
import GetNotes from "./Components/GetNotes";
import Home from './Components/Home';
import UserProfile from "./Components/UserProfile";
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin";

class Routers extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/users" component = {UserRegister}/>
        <Route exact path="/users/:id" component = {UserProfile}/>
        <Route exact path="/login" component = {UserLogin}/>
        <Route exact path="/notes" component = {GetNotes}/>
        <Route exact path="/drafts" component = {WriteNotes}/>
      </Router>
    );
  }
}

export default Routers;