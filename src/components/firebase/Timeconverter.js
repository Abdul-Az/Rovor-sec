import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
import CustomizedTable from "./Userstable";
import Userslistm from "./Userslistm";


const sum = Object.keys(props.users)
    const total =  sum.length
    const username = props.users
    const  lastseen =  username.map(obj => {
        obj.LastSeen })



function TimeConverter(lastseen){
    
    var a = new Date(lastseen * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  console.log(TimeConverter(lastseen));

  export {TimeConverter}