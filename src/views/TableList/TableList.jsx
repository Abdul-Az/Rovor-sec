import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ControlledCarousel from './Carousel';
import Icon from "@material-ui/core/Icon";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Pushpanel from "./Pushpanel";
import Toggelbutton from "./Toggelbutton";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <Fragment>
    <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>

                <CardIcon color="info">
                <div style={{fontSize:"30px"}}>25</div>
                  {/* <Icon>mood</Icon> */}
                </CardIcon>
               
                {/* <p className={classes.cardCategory}>Total Riders</p> */}
                {/* <h3 className={classes.cardTitle}>18</h3> */}
              </CardHeader>
              
              <CardFooter >
            
                <Icon>person</Icon> 
                <h4>No. of Rides</h4>
              
              </CardFooter>
            </Card>
          </GridItem>

        

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                <div style={{fontSize:"30px"}}>10</div>
               
                {/* <Icon>mood</Icon> */}
                </CardIcon>
                <CardIcon color="warning">
                <div style={{fontSize:"30px"}}>12</div>
                
                {/* <Icon>sentiment_very_dissatisfied</Icon> */}
                </CardIcon>
                <CardIcon color="danger">
                <div style={{fontSize:"30px"}}>3</div>
               
                {/* <Icon>mood_bad</Icon> */}
                </CardIcon>
                {/* <p className={classes.cardCategory}>Moderate Riders</p>
                <h3 className={classes.cardTitle}>4</h3> */}
                
              </CardHeader>
              <CardFooter >
            
            <Icon>person</Icon> 
            <h4>Ride Types</h4>
          
          </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <div style={{fontSize:"30px"}}>140 kmph</div>
                  {/* <Icon>supervisor_account</Icon> */}
                </CardIcon>
                
                {/* <p className={classes.cardCategory}>Online Users</p> */}
                {/* <h3 className={classes.cardTitle}>6</h3> */}
              </CardHeader>
              <CardFooter>
              <Icon>person</Icon> 
            <h4>Max. Speed</h4>
          
          </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                <div style={{fontSize:"30px"}}>14 mins</div>
                  {/* <Icon>mood</Icon> */}
                </CardIcon>
                
                {/* <p className={classes.cardCategory}>Total Riders</p> */}
                {/* <h3 className={classes.cardTitle}>18</h3> */}
              </CardHeader>
              <CardFooter>
              <Icon>person</Icon> 
            <h4>Average Trip Duration</h4>
          
              </CardFooter>
            </Card>
          </GridItem>
        
        </GridContainer>

      
      <GridContainer>
      <GridItem xs={8} sm={8} md={8}>
        <Card plain>
          <CardHeader plain color="primary">
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <h4 style={{display:"block"}} className={classes.cardTitleWhite}>
              User Carousel
          <p className={classes.cardCategoryWhite}>
              Here are the trip details
            </p>
            </h4> 
            <Toggelbutton /> 
            </div>
            
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
          <ControlledCarousel />
          </CardBody>
        </Card>
      </GridItem >
      <GridItem xs={4} sm={4} md={4}>
      <Card profile>
      <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Push Notification
            </h4>
      </CardHeader>
       <Pushpanel />

      </Card>

      </GridItem>
    </GridContainer>
    </Fragment>
  );
}

export default withStyles(styles)(TableList);
