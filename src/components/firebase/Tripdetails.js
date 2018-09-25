import React,{Component} from 'react';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";

function Tripdetails {
const FirebaseRef = firebase.database().ref("Users");
firebaseRef.orderByChild(userKey).equalTo(true/false).on("child_added", function(Data){
console.log(Data.val(), Data.key);
}
}
