import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import Viewmore from "./Viewmore";
import {Route, withRouter, Link ,Redirect} from 'react-router-dom'
// import {Link } from "react-router";

// import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "2px",
    textDecoration: "none"
  }
};


class UserProfile extends React.Component {
 
  
 
  render(){
    const { classes } = this.props;
    
    const username = this.props.users
    console.log(username)
  return (
    <div>
      <GridContainer>
      {username.map((obj, key) => {
        var  key= obj
        var item= username[key]
                 return  ( 
                 <GridItem xs={6} sm={4} md={2}  >
                <Card style={{backgroundColor:"green"}} profile>
                <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>{obj.Username}</h4>
              <h4>{obj.gender}</h4>
              <h4 className={classes.description}>
              No. of Trips { Object.keys(obj.trips).length - 1 }
              </h4>
            
               <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
                
              
            </CardBody>
          </Card>
        </GridItem>
                 )})})
      
       
         
        
      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(UserProfile);
