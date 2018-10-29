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
  // console.log(props)
  const username = props.users
  // console.log(props.match.params.id)
  // const user = props.uid;
    
  // var userid = username.filter(obj => {
  //   const user = props.uid;
  //   if(user === obj.UserId)
  //   return obj
  // })
  // console.log(userid)
  var userid = username.filter(obj => {
    const user = props.uid;
    if(user === obj.UserId)
    return obj
  })

// for avg trip duration 
var tripduration = userid.map(obj =>{return  Object.values(obj.trips).map(value => { 
  let { userId, ...y} = obj.trips
  return  Object.values(y).map(s => {                   
  return s.tripDuration })}) 
  })

// for avg time taken 

var sum = 0;
for( var i = 0; i < tripduration.length; i++ ){
    sum += parseInt( tripduration[i], 10 ); //don't forget to add the base
}

var avg = sum/tripduration.length;
var avgtime = Math.ceil(avg/60) 


//for overall max speed
  var allmaxspeed = userid.map(obj =>{return  Object.values(obj.tripSpeeds).map(value => { 
    let { userId, ...y} = obj.tripSpeeds
    return  Object.values(y).map(s => {                   
    return Object.values(s).reduce((acc, t) => acc = acc > t.speed ? acc : t.speed, 0) })}) 
    })
   var  tripmaxspeed =  Object.values(allmaxspeed).reduce((acc, t) => acc = acc > t ? acc : t, 0)
   var overalltripmax =  Object.values(tripmaxspeed).reduce((acc, t) => acc = acc > t ? acc : t, 0)
   var overalltripmax1 = Object.values(overalltripmax).reduce((acc, t) => acc = acc > t ? acc : t, 0)
  //  console.log(overalltripmax1)

 //for no of trips
 
  var notrips = userid.map(obj =>{return Object.keys(obj.trips).length - 1})

  //for ride types (safe)
  let safe = userid.map(obj =>{
    return Object.values(obj.trips).map(value => { 
      let { userId, ...y} = obj.trips
      return  Object.values(y).map(s => {                   
          return s.tripMaxSpeed })})
  })
  var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj <= 60})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var sr = saferides.map(obj =>{return obj[0]})

//(moderate)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var mr = saferides.map(obj =>{return obj[0]})

//(unsafe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var usr = saferides.map(obj =>{return obj[0]})


  //for username
  var usernamesp = userid.map(obj =>{return obj.Username})
    return (
    <Fragment>
   

    <h4>{usernamesp}</h4>
    <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>

                <CardIcon color="info">
                <div style={{fontSize:"30px"}}>{notrips}</div>
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
                <div style={{fontSize:"30px"}}>{sr}</div>

               
                {/* <Icon>mood</Icon> */}
                </CardIcon>
                <CardIcon color="warning">
                <div style={{fontSize:"30px"}}>{mr}</div>
                
                {/* <Icon>sentiment_very_dissatisfied</Icon> */}
                </CardIcon>
                <CardIcon color="danger">
                <div style={{fontSize:"30px"}}>{usr}</div>
               
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
                <div style={{fontSize:"30px"}}>{overalltripmax1} kmph</div>
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
                <div style={{fontSize:"30px"}}>{avgtime} mins</div>
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
          <CardBody plain>
            {/* <div style = {{ width: "800px", height: "100px"}}> */}
          <ControlledCarousel />
          {/* </div> */}
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
