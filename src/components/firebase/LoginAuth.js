import React, { Component } from 'react';
import {firebaseApp} from './base';
import Branches  from './Branches';
import Login from '../Login/Login';

class LoginAuth extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseApp.auth().onAuthStateChanged((user) => {
    //   console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ?  (<div><Branches /></div>) : (<Login />)}</div>
    )}
}

 export default LoginAuth;