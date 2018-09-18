import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel,Button } from "react-bootstrap";
import "./Login.css";
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false 
    }
    // this.onChange = this.onChange.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
 loginHandle()
   {
     this.setState({ redirect:true})

   }
 
 
  
  render() {
    if(this.state.redirect){
      return(<Redirect to={"/BranchLogin"} />)
    }
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
           {/* <input type = "button" value = "log in" bsSize="large"  block onClick={this.loginHandle}/> */}
        
           <Button
            block
            bsSize="large"
            onClick={this.loginHandle}
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}


