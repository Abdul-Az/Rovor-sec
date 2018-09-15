import React, {Component} from "react";
import {DB_CONFIG} from "./Config";
import firebase from "firebase";
import "firebase/database";


class Totalusers extends Component {
    constructor() {
        super()

this.app = firebase.initializeApp(DB_CONFIG);
this.database = this.app.database().ref().child('users');


this.state = {
    users : []
  }
}

componentDidMount() {
 this.database.on('value', snap => {
     this.setState({
         users: snap.numChildren()
     });
 });
}
    render() {

      return (
       <div>{this.state.users}</div>
      );
    }
}

  export default Totalusers;
  