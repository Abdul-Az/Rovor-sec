import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";
import {db} from "./base";
// import {TimeConverter} from "./Timeconverter";
// import ListGroupCollapse from "./Viewmore";


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
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




let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
// var test = db.ref('trips').numChildren()
// console.log(test)
// firebase.database().ref('trips').child("tripAvgSpeed").once('value').then(function(snapshot){
//     // var noTrips=0, maxSpeed=0, totalDistance=0, totalDuration=0, avgSpeed=0;
//     // var indiSpeed=0, indiDistance=0, indiDuration=0;
//     snapshot.forEach(function(snap){
//         var dateData=snap.child("tripdate").val();
//         // console.log(dateData)
//     })
// });
// const sum = Object.keys(props.users)
//     const total =  sum.length
//     const username = props.users
//     const  lastseen =  username.map(obj => {
//         obj.LastSeen })


    
function CustomizedTable(props) {
  
const sum = Object.keys(props.users)
const total =  sum.length
const username = props.users
const  lastseen =  username.map(obj => {
    obj.LastSeen })
const { classes } = props;

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
//   console.log(TimeConverter(lastseen));
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow >
            <CustomTableCell  style={{fontSize: "Large"}}>Username</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Gender</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Max. Speed</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>No. of Trips</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Email</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Status</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Last Seen</CustomTableCell>
            <CustomTableCell numeric style={{fontSize: "Large"}}>Phone</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {username.map(obj => {
            return (
              <TableRow className={classes.obj} key={obj.id}>
                {/* <ListGroupCollapse /> */}
                <CustomTableCell component="th" scope="row">
                  {obj.Username}
                </CustomTableCell>
                <CustomTableCell numeric>{obj.gender}</CustomTableCell>
                <CustomTableCell numeric>{}</CustomTableCell>
                <CustomTableCell numeric>{}</CustomTableCell>
                <CustomTableCell numeric>{obj.Email}</CustomTableCell>
                <CustomTableCell numeric>{obj.Status}</CustomTableCell>
                <CustomTableCell numeric>{TimeConverter(obj.LastSeen)}</CustomTableCell>
                <CustomTableCell numeric>{obj.Phone}</CustomTableCell>
                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
