import React, { Component } from 'react';
import fire from './config/Fire';
import {Branches , Logout} from './Branches';
import Login from './Login';

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
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ? : ( <Branches/>) : (<Login />)}</div>
    )}
}

 export default LoginAuth;