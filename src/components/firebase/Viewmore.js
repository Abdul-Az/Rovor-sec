import React, { Fragment } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
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
import CustomizedTable from "./Userstable";
// import {Usertable}  from "./Userstable";
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import ListGroupCollapse from "./Viewmore";



class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }



  
  render() {

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

  const obj = this.props.item;
  var allmaxspeed =  Object.values(obj.tripSpeeds).map(value => { 
    let { userId, ...y} = obj.tripSpeeds
    return  Object.values(y).map(s => {                   
    return Object.values(s).reduce((acc, t) => acc = acc > t.speed ? acc : t.speed, 0) })}) 

  var  tripmaxspeed =  Object.values(allmaxspeed).reduce((acc, t) => acc = acc > t ? acc : t, 0)
 var overalltripmax =  Object.values(tripmaxspeed).reduce((acc, t) => acc = acc > t ? acc : t, 0)
   


    return (

    
//  <ListGroupItem >
       
     <Fragment>
        <TableRow className={this.props.row} onClick={this.toggle}  >
        <CustomTableCell component="th" scope="row">
                  {obj.Username}
                </CustomTableCell>
                <CustomTableCell numeric>{obj.gender}</CustomTableCell>
                <CustomTableCell numeric>{overalltripmax}</CustomTableCell>
                <CustomTableCell numeric>{ Object.keys(obj.trips).length - 1 }</CustomTableCell>
                <CustomTableCell numeric>{obj.Email}</CustomTableCell>
                <CustomTableCell numeric>{obj.Status}</CustomTableCell>
                <CustomTableCell numeric>{TimeConverter(obj.LastSeen)}</CustomTableCell>
                <CustomTableCell numeric>{obj.Phone}</CustomTableCell>
               </TableRow>
          <Collapse isOpen={this.state.collapse}>
          
          
          
          
          sdgsgadfga
          
          
          
          
          
          
          
          
          
          
          
          
          
          </Collapse>
          </Fragment>
        
        
//  </ListGroupItem>
    
    
      
    );
  }
}

export default ListGroupCollapse