import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
import Mumbaiu from "./Mumbaiu";
import Chennaiu from "./Chennaiu";
import CustomizedTable from "./Userstable";


class Userslistc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Usernamem : [],
            Usernamec : [],
        }
    }
    


    componentDidMount(){

     


        base.fetch('tripSpeeds', {
            context: this,
            then(tripSpeeds){
                var tripS = Object.keys(tripSpeeds).map(function(key) {
                    return tripSpeeds[key]
                    console.log(tripS)
                })
        }
    })

        base.fetch('tripRoute', {
            context: this,
            then(tripRoute){
        var tripR = Object.keys(tripRoute).map(function(key) {
            return tripRoute[key]
            console.log(tripR)
        })
    }
})
        base.fetch('Users', {
          context: this,
          then(Users){
           
            var Username = Object.keys(Users).map(function(key) {
                return Users[key]
                console.log(Username)
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
            console.log(resultC)

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
  return (
     <div>
         <CustomizedTable users={this.state.Usernamec}  />
         {/* <Chennaiu usersc = {this.state.Usernamec} /> */}
     </div>
  );
};
}
export default Userslistc;