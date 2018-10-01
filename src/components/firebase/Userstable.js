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
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ListGroupCollapse from "./Viewmore";
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







    
function CustomizedTable(props) {

const {classes } = props;

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
        
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);


class Usertable extends Component {
 
  render() {

// const sum = Object.keys(this.props.users)
// console.log(sum)
// const total =  sum.length
const username = this.props.users
// console.log(username)
const  lastseen =  username.map(obj => {
    obj.LastSeen })
    // var  notripss = props.ntrips
// const { classes } = this.props;

    return(


      <TableBody>
        {username.map((obj, key) => {

           


            return  <ListGroupCollapse key={obj} item={username[key]} ></ListGroupCollapse>
              
          
          })}
 </TableBody>
    )}
        }
export {Usertable}
