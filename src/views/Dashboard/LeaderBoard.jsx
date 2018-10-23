import React from "react";
import Table from "components/Table/Table.jsx";
import firebase from "firebase";
import {firebaseApp} from "../../components/firebase/base";
import database from "firebase/database";
import base from "../../components/firebase/base";
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
  
  //(total rides)
  var safelist = safe.map(obj => {return obj.map(obj => {return obj.map(obj => 
    {
        return obj
    //     var types = {
    //         safe : [],
    //         moderate : [],
    //         unsafe : [],
    //     }
    //     if( obj <= 60)
    //     types.safe.push(obj).length
    //     else if( obj > 60 && obj <= 70)
    //     types.moderate.push(obj).length
    //     else if(obj < 400)
    //     types.unsafe.push(obj).length
    //     // console.log(safe)
        
    //    return  types
    }
    
    
    )}) })

    console.log(safelist)
    // var mylist = []
    // for (var i = 0 ; i < Object.keys(safelist).length ; i++ )
    // {
    //     var myList = safelist;
    //     for(var j=3;j<Object.keys(myList).length;j++){
    //         if(myList[j]!=undefined){
    //             for(var k=0;k<Object.keys(myList[j]).length;k++){
    //                 var mylistTemp = myList[j][k];
    //                 for(var l=0;l<Object.keys(mylistTemp).length;l++){
    //                     var mylistTemp2 = myList[j][k][l]["safe"];
    //                     console.log(mylistTemp2);
    //                 }
    //             }
    //         }
    //         //console.log(mylistTemp)
    //     }
    // }

//    console.log(mylist["safe"])
    // console.log(safelist.concat(types.safe, types.moderate, types.unsafe)
    // console.log(safelist)
//        var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
// var sr = saferides.map(obj =>{return obj})
// console.log(sr)
// var sumsr = sr.reduce((a,b) => a+b,0)
// //(moderate)
// var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
//        var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
// var mr = saferides.map(obj =>{return obj[0]})
// var summr = mr.reduce((a,b) => a+b,0)
// //(unsafe)
// var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
//        var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
// var usr = saferides.map(obj =>{return obj[0]})
// var sumusr = usr.reduce((a,b) => a+b,0)


//flag of (safe, moderate, unsafe)
function tag() {
    let safe = userresult.map(obj =>{
        return Object.values(obj.trips).map(value => { 
          let { userId, ...y} = obj.trips
          return  Object.values(y).map(s => {                   
              return s.tripMaxSpeed })})
      })
     //(safe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj <= 60})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var sr = saferides.map(obj =>{return obj[0]})
var sumsr = sr.reduce((a,b) => a+b,0)
//(moderate)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
  var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var mr = saferides.map(obj =>{return obj[0]})
var summr = mr.reduce((a,b) => a+b,0)
//(unsafe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var usr = saferides.map(obj =>{return obj[0]})
var sumusr = usr.reduce((a,b) => a+b,0)

    if (sumsr > summr && sumusr)
    return ("safe")
    else if (summr > sumsr && sumusr)
    return ("moderate")
    else return ("unsafe")
}
// console.log(tag())



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
