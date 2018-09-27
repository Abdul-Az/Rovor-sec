import React,{Component} from 'react';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";

function Tripdetails {
const FirebaseRef = firebase.database().ref("Users");
firebaseRef.orderByChild(userKey).equalTo(true/false).on("child_added", function(Data){
 return console.log(Data.val(), Data.key);
}
}


const TripsRef = firebase.database().ref();
TripsRef.on("value", function(Data){
    // let result = _.map(Object.keys(Data.val().tripRoute), (userId) => {
    //     return _.assign(userId, _.find(Data.val().Users, { UserId: userId }))
    // })
    const tripRoutes = Data.val().tripRoute
    let result = Object.keys(Data.val().Users).map((userId) => {
        console.log(userId)
        let obj = Data.val().Users[userId]
        obj.tripRoute = Object.assign({}, tripRoutes[userId])
        
        return obj
    })
    // var uniqueu = Data._.groupBy()
//   var Tripsd = Object.keys(Data.val())
//   var det = Tripsd.flat()
console.log(Data.val())
console.log(result)
// console.log(tripRoutes['8saB3qEfo7ZE7nwPJ7vDackj33h1'])
})