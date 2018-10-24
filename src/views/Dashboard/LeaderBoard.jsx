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

//Function that returns the result

function determineFlag(arr1,arr2,arr3){

    var flag, max, startFlag = [];
    
    for(var i=0;i<arr1.length;i++){
    
    //if all three index values are same give priority to safe
    
    if(arr1[i] === arr2[i] && arr1[i] === arr3[i]){
    
    flag = 1;
    
            }else{
    
    //compare 2 arrays safe and moderate
    
    if(arr1[i] > arr2[i]){
    
    flag = 1;
    
    max = arr1[i];
    
            }else{
    
    flag = 2;
    
    max = arr2[i];
    
                    }
    
    //Now we got max of safe and moderate now compare max with unsafe
    
    if(arr3[i] > max){
    
    flag = 3;
    
    max = arr3[i];
    
                    }
    
            }
    
    //flag 1 = safe, 2 = moderate and 3 = unsafe push these values into startFlag
    
    switch(flag){
    
                case 1 : startFlag.push("safe");
    
     break;
    
                case 2 : startFlag.push("moderate");
    
     break;
    
                case 3 : startFlag.push("unsafe");
    
     break;
    
            }
    
        }
    
    //return the results
    
    return startFlag;
    
    }
    let userstatus =   determineFlag(arr1,arr2,arr3)

//     const obj = {};
// var status
//     for (const key of userstatus) {
//          obj[key] = status;
//     }
//           console.log(obj)

        //   for (const stat in userstatus){
          var res = userresult.map((obj) => {
               userstatus
                    // console.log(userstatus)
                  return Object.assign( {userstatus} , obj)
                
        
        })
    
       console.log(res)
        //   let users = Object.assign({}, userstatus)
        //   console.log(users)
        }) 

    //    let username =  userresult.map(obj =>{
    //     return Object.values(obj.User).map(value => { 
       
    }


    render() {


        return (
    <Table 
    root={{fontSize: "80px"}}
    tableHeaderColor="danger"
    tableHead={["Rank", "Name", "Status", "Rides"]}
    tableData={ [
      ["1", "g", "8", "Pulsar"],
      ["2", "User7", "20", "Honda City"],
      ["3", "User10", "50", "Discover"],
      ["4", "User3", "5", "Duke"]
    ]}
    />


        )
    }


}

export default LeaderBoard;
