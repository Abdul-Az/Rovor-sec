import  React, {Component} from 'react';
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
import { Well } from 'react-bootstrap';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ListGroupCollapse from "./Viewmore";
import orderBy from "lodash/orderBy";
import _ from "lodash";

import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';
  
import UserProfile from '../../views/UserProfile/UserProfile';
  
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







    
class CustomizedTable extends Component{
  constructor(props){
    super(props)

    this.state = {
      username : this.props.users,
      sortDirection : 'dsc'
    }
  }

  // const sum = Object.keys(this.props.users)
// console.log(sum)
// const total =  sum.length

// handleSort() {
  
// this.setState(state => ({
//    sortDirection :  this.dataDirection
// }))
// }

render() {
  
const username = this.props.users
// console.log(username)
const sortedusers = this.props.sortedusers

const  lastseen =  username.map(obj => {
    obj.LastSeen })
    // var  notripss = props.ntrips
// const { classes } = this.props;


const {classes } = this.props;

  return (
  
    <CardColumns>
      
     {username.map((obj, key) => {
                 return  <UserProfile key={obj} item={username[key]} ></UserProfile>
                 {console.log(this.item)}
                 })}
    </CardColumns>
      
  );
}

// CustomizedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
}
export default withStyles(styles)(CustomizedTable);


// class Usertable extends Component {
 
//   render() {

//     const styles = theme => ({
//       root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX: 'auto',
//       },
//       table: {
//         minWidth: 700,
//       },
//       row: {
//         '&:nth-of-type(odd)': {
//           backgroundColor: theme.palette.background.default,
//         },
//       },
//     });
    

// // const sum = Object.keys(this.props.users)
// // console.log(sum)
// // const total =  sum.length
// const username = this.props.users
// // console.log(username)
// const  lastseen =  username.map(obj => {
//     obj.LastSeen })
//     // var  notripss = props.ntrips
// // const { classes } = this.props;

//     return(
      
//       <Paper className={this.root}>
//       <Table className={this.table}>
//     <TableBody>

    
//         {username.map((obj, key) => {

           


//             return  <ListGroupCollapse key={obj} item={username[key]} ></ListGroupCollapse>
              
          
//           })}
//      </TableBody>
//     </Table>
//     </Paper>

//     )}
//         }
// export {Usertable}
