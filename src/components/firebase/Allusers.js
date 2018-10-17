import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
import CustomizedTable from "./Userstable";
// import _ from "underscore";
import ListGroupCollapse from "./Viewmore";
// import {Usertable}  from "./Userstable";
import orderBy from "lodash/orderBy";
import _ from "lodash";
import Dashboard from '../../views/Dashboard/Dashboard';


class Allusers extends Component {
    constructor(props) {
        super(props);
        this.dataDirection = this.dataDirection.bind(this);

        this.state = {
            Allusers : [],
           
    
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
            var notrips = userresult.map(user => {
                return  Object.keys(user.trips).length - 1; 
                
                })
            this.setState({
                Allusers : userresult,
               
            })
        }.bind(this))   
 }

  
 dataDirection() {
    this.setState( () => {
        const invert = {
            asc : "desc",
            desc: "asc"
          }
 let sorted =  _.orderBy(this.state.Allusers, ['LastSeen'], ['desc'])
        return {
            Allusers : sorted
        }
    })
   
  }
 
render() {

    
   
    

  return (
     <div>
         {/* <CustomizedTable users={this.state.Allusers}  sortedusers={this.dataDirection}/> */}
         {this.state.Allusers.length}
         {/* <Usertable users={this.state.Allusers} /> */}
         {/* {console.log(users)} */}
         
     </div>
  );
};
}
export default Allusers;