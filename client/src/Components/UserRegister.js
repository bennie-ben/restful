import React from 'react';
import styled from "styled-components";
import { Redirect } from 'react-router-dom'
import axios from "axios";

const Grid = styled.div`
  display : grid;
  place-content : center center;
`
const Form = styled.form`
  display : grid;
  grid-gap : 10px;
`
const Text = styled.input`
  border : 1px black solid;
  border-radius : 4px;
`
const Submit = styled.input`
  border : 1px black solid;
  border-radius : 4px;
`
const PasswordError = styled.p`
  display : ${props=>props.passwordError ? "block" : "none"};
`

class UserRegister extends React.Component{
  state = {
    username : "",
    password : "",
    email : "",
    verifyPassword : "",
    passwordError : false,
    redirect : false
  }

  _renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to = "/"/>
    }
  }
  _handleUsername = event => this.setState({ username : event.target.value });

  _handleEmail = event => this.setState({ email : event.target.value });
  
  _handlePassword = event => this.setState({ password : event.target.value });
  
  _handleVerify = event =>this.setState({ verifyPassword : event.target.value });
  
  componentDidMount(){
    console.log(this.state);
    console.log(this.props.history);
  }
  render(){
    return (
      <div className = "userRegister">
        <Grid>
          <h1>User Register</h1>
          <Form onSubmit={async event=>{
            const { username, password, verifyPassword, email } = this.state;
              if(password===verifyPassword){
                await axios({ method : "post", url : "/users", data : { username, password, email }})
                  .then(this.setState({ passwordError : false, redirect : true }))
                  .catch(err=>console.log(err));            
                console.log(this.state);
                event.preventDefault();
              }
              else{
                this.setState({ passwordError : true,  redirect : false});
                console.log(this.state);
                event.preventDefault();
              }
          }}>
            <Text type = "text" placeholder="Username" onChange={this._handleUsername} required="true"/>
            <Text type = "eamil" placeholder="Email" onChange={this._handleEmail} required="true"/>
            <Text type = "password" placeholder="Password" onChange={this._handlePassword} required="true"/>
            <Text type = "password" placeholder="Verify Password" onChange={this._handleVerify} required="true"/>
            <PasswordError passwordError = {this.state.passwordError}>Password hasn't been verified.</PasswordError>
            <Submit type = "submit" value="Join"/>
          </Form>
          {this._renderRedirect()}
        </Grid>
      </div>
    );
  }
}

export default UserRegister;