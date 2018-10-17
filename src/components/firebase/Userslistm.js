import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
// import Mumbaiu from "./Mumbaiu";
// import Chennaiu from "./Chennaiu";
import CustomizedTable from "./Userstable";
import _ from "underscore";



class Userslistm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Allusers : [],
            Usernamem : [],
            Usernamec : [],
        }
    }


    componentDidMount(){

        base.fetch('Users', {
          context: this,
          then(Users){
           
            var Username = Object.keys(Users).map(function(key) {
                return Users[key]
            })
            //  console.log(Username)

            var resultM = Username.filter(obj => {
                return obj.Status === "Online"
              })

              var resultC = Username.filter(obj => {
                return obj.organization === "TCSChennai"
              })
              var result = Username


                this.setState({
                    Allusers : result,
                    Usernamem : resultM,
                    Usernamec : resultC,
                })
        }

          })
      }

    //   addUsers = (key) => {
    //       const usders = {...this.state.result}
    //   }
    

render() {


const UserRef = firebase.database().ref().on("value", function(Data){
    const tripRoutes = Data.val().tripRoute
    const tripss = Data.val().trips
    const tripSpeedss = Data.val().tripSpeeds
    let userresult = Object.keys(Data.val().Users).map((userId) => {
        // console.log(userId)
        let obj = Data.val().Users[userId]
        obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
        obj.trips = Object.assign({userId},tripss[userId],)
        obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
        
        return obj
    })
//    console.log(userresult)
var notrips = userresult.map(user => {
  return  Object.keys(user.trips).length - 1; 
  
  })
console.log(notrips)
})


  return (
     <div>
         {this.state.Usernamem.length}
         {/* <ListGroupCollapse  users={this.state.Usernamem} /> */}
     </div>
  );
};
}
export default Userslistm;