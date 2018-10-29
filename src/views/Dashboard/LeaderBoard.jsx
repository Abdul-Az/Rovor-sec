import React, { Fragment } from "react";
// import Table from "components/Table/Table.jsx";
import firebase from "firebase";
import {firebaseApp} from "../../components/firebase/base";
import database from "firebase/database";
import base from "../../components/firebase/base";
import _ from "lodash";
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class LeaderBoard extends React.Component {

    constructor() {
       super();
       this.state = {
           Allusers : []
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
      
   
  //  console.log(userresult)

    render() {

         //    this.sorted = this.sorted.bind(this)
        

             //for ride types (safe)
  let safe = this.state.Allusers.map(obj =>{
    return Object.values(obj.trips).map(value => { 
      let { userId, ...y} = obj.trips
      return  Object.values(y).map(s => {                   
          return s.tripMaxSpeed })})
  })
  console.log(safe)
 var totalrides = safe.map(rides => { return rides.length - 1}) 

var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj <= 60})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr1 = saferides.map(obj =>{return obj[0]})
// console.log(arr1)
// var sumsr = sr.reduce((a,b) => a+b,0)
//(moderate)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
  var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr2 = saferides.map(obj =>{return obj[0]})
// console.log(arr2)
// var summr = mr.reduce((a,b) => a+b,0)
//(unsafe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var arr3 = saferides.map(obj =>{return obj[0]})
// var sumusr = usr.reduce((a,b) => a+b,0)
// console.log(arr3)

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
// var arr = [1,2,3,2]
// for( let a of arr )
// {
//     console.log(arr)
// }



function addStatus(objectName, arr){
	for(var i = 0 ; i < arr.length ; i++){
		objectName[i].status = arr[i];
    }
	return objectName;
}

function addtotalrides(objectName, arr){
	for(var i = 0 ; i < arr.length ; i++){
		objectName[i].totalrides = arr[i];
    }
	return objectName;
}

function addsaferides(objectName, arr){
	for(var i = 0 ; i < arr.length ; i++){
		objectName[i].saferides = arr[i];
    }
	return objectName;
}
var finalUserResult = addStatus(this.state.Allusers, userstatus);
var addtotal = addtotalrides(this.state.Allusers , totalrides)
var addsafe = addsaferides(this.state.Allusers, arr1)
// console.log(addtotal)

let sorted =  _.orderBy(addtotal, ['totalrides'], ['desc'])
console.log(sorted)

    

    //    console.log(this)
        // const { classes } = this.props;
        var sortedusers = sorted;

        return (
            <Fragment>
            <Paper >
            <Table >
            <TableHead>
          <TableRow >
            <CustomTableCell >Rank</CustomTableCell>
            <CustomTableCell >Username</CustomTableCell>
            <CustomTableCell >Status</CustomTableCell>
            <CustomTableCell numeric>Total Rides</CustomTableCell>
            <CustomTableCell numeric>Safe Rides</CustomTableCell>
          </TableRow>
        </TableHead>
            <TableBody>
            {sortedusers.map((row, index) => {
              
              return (
                <TableRow  >
                  <CustomTableCell component="th" scope="row" numeric>
                    {index+1}
                  </CustomTableCell>
                  <CustomTableCell >{row.Username}</CustomTableCell>
                  <CustomTableCell >{row.status}</CustomTableCell>
                  <CustomTableCell numeric>{row.totalrides}</CustomTableCell>
                  <CustomTableCell numeric>{row.saferides}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
</Fragment>

        )
    }


}

export default LeaderBoard;
