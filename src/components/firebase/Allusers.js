import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
import CustomizedTable,{ListGroupCollapse} from "./Userstable";
import _ from "underscore";



class Allusers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Allusers : []
        }
        
    }


    componentDidMount(){

        const UserRef = firebase.database().ref().on("value", function(Data){
            
            const tripRoutes = Data.val().tripRoute
            const tripss = Data.val().trips
            const tripSpeedss = Data.val().tripSpeeds
            var userresult = Object.keys(Data.val().Users).map((userId) => {
                var obj = Data.val().Users[userId]
                obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
                obj.trips = Object.assign({userId},tripss[userId],)
                obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
                return obj
            })

            this.setState({
                Allusers : userresult
            })
        }.bind(this))

     
    
 }
 
render() {


   
    

  return (
     <div>
         <CustomizedTable users={this.state.Allusers}  />
         <ListGroupCollapse  users={this.state.Allusers} />
     </div>
  );
};
}
export default Allusers;