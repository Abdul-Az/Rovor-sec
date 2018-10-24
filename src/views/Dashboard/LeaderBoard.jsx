import React from "react";
import Table from "components/Table/Table.jsx";
import firebase from "firebase";
import {firebaseApp} from "../../components/firebase/base";
import database from "firebase/database";
import base from "../../components/firebase/base";
import _ from "lodash";
class LeaderBoard extends React.Component {

    constructor() {
       super();
        const UserRef = firebase.database().ref().on("value", function(Data){
            
            const tripRoutes = Data.val().tripRoute
            const tripss = Data.val().trips
            const tripSpeedss = Data.val().tripSpeeds
            //User specefic data
            var userresult = Object.keys(Data.val().Users).map((userId) => {
                var obj = Data.val().Users[userId]
                obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
                obj.trips = Object.assign({userId},tripss[userId],)
                obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
                return obj
            })
             //for ride types (safe)
  let safe = userresult.map(obj =>{
    return Object.values(obj.trips).map(value => { 
      let { userId, ...y} = obj.trips
      return  Object.values(y).map(s => {                   
          return s.tripMaxSpeed })})
  })
  

var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj <= 60})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr1 = saferides.map(obj =>{return obj[0]})
console.log(arr1)
// var sumsr = sr.reduce((a,b) => a+b,0)
//(moderate)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
  var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr2 = saferides.map(obj =>{return obj[0]})
console.log(arr2)
// var summr = mr.reduce((a,b) => a+b,0)
//(unsafe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr3 = saferides.map(obj =>{return obj[0]})
// var sumusr = usr.reduce((a,b) => a+b,0)
console.log(arr3)





            // console.log(this.state.sumusr)
        }) 
        
       
    }


    render() {
        return (
    <Table 
    root={{fontSize: "80px"}}
    tableHeaderColor="danger"
    tableHead={["Rank", "Name", "Rides", "Bike"]}
    tableData={ [
      ["1", "User5", "8", "Pulsar"],
      ["2", "User7", "20", "Honda City"],
      ["3", "User10", "50", "Discover"],
      ["4", "User3", "5", "Duke"]
    ]}
    />


        )
    }


}

export default LeaderBoard;
