import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
// import Mumbaiu from "./Mumbaiu";
// import Chennaiu from "./Chennaiu";
import CustomizedTable,{ListGroupCollapse} from "./Userstable";
import _ from "underscore";



class Userslistm extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
             

            var resultM = Username.filter(obj => {
                return obj.organization === "TCSMumbai"
              })

              var resultC = Username.filter(obj => {
                return obj.organization === "TCSChennai"
              })
                       


                this.setState({
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


const UserRef = firebase.database().ref();
UserRef.on("value", function(Data){
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
   
console.log(userresult)

})


  return (
     <div>
         <CustomizedTable users={this.state.Usernamem}  />
         <ListGroupCollapse  users={this.state.Usernamem} />
     </div>
  );
};
}
export default Userslistm;