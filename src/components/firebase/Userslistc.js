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
// import { TimeConverter } from './Timeconverter';


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
            // var mumbaiArr = Username.filter(function(e1) {
            //     return e1.organization === "TCSMumbai";
            // });  

            var resultM = Username.filter(obj => {
                return obj.organization === "TCSMumbai"
              })

              var resultC = Username.filter(obj => {
                return obj.organization === "TCSChennai"
              })
                       
            //   const org = "TCSMumbai"
            // const findUsers = Username.map.(function(mumbai , org) {
            //     if(mumbai.organization ===  org)
            //     {
            //         return findUsers
            //     } 
            //     })
            // const org = "TCSMumbai"
            // const findUsers = function(mumbai , org) {
            //     const index = mumbai.reduce(function(user , index) {
            //         return user.organization ===  org 
            //     })
            //         return mumbai[index]
            // } 

            // let printMe = findUsers(Username, org )

            // Username.findIndex(function(mumbai , index) {
            //     return mumbai.organization === "TCSMumbai"
            // })
            //   Users[key] === "TCSMumbai"
            // console.log(resultC)

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
    // <TimeConverter users = {this.state.Usernamem} />
    
// const UsersRef = firebase.database().ref("Users").on("value", Data => Object.keys(Users).map(function(key){
    // return Users[key]
// }))

// console.log(UsersRef)

const TripsRef = firebase.database().ref();
TripsRef.on("value", function(Data){
    // let result = _.map(Object.keys(Data.val().tripRoute), (userId) => {
    //     return _.assign(userId, _.find(Data.val().Users, { UserId: userId }))
    // })
    const tripRoutes = Data.val().tripRoute
    const tripss = Data.val().trips
    const tripSpeedss = Data.val().tripSpeeds
    let result1 = Object.keys(Data.val().Users).map((userId) => {
        // console.log(userId)
        let obj = Data.val().Users[userId]
        obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
        obj.trips = Object.assign({userId},tripss[userId],)
        obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
        
        return obj
    })
    // var uniqueu = Data._.groupBy()
//   var Tripsd = Object.keys(Data.val())
//   var det = Tripsd.flat()
// console.log(Data.val())
console.log(result1)
// console.log(tripRoutes['8saB3qEfo7ZE7nwPJ7vDackj33h1'])
})

const TsRef = firebase.database().ref("tripSpeeds");
TsRef.on("child_added", function(Data){
    // var uniqueu = Data._.groupBy()
  var Tsd = Data.val()
// console.log(uniqueu)
})

const TrRef = firebase.database().ref("tripRoute");
TrRef.on("child_added", function(Data){
    // var uniqueu = Data._.groupBy()
  var Trd = Data.val()
// console.log(uniqueu)
})
// console.log(firebaseRef)
  return (
     <div>
         {/* <CustomizedTable users={this.state.Usernamec}  /> */}
         {/* <ListGroupCollapse  users={this.state.Usernamec} /> */}
     </div>
  );
};
}
export default Userslistm;