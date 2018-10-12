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

// class AppComponent extends Component {
//   handleClick() {
//     console.log('clicked')
//   }

//   render() {
//     return (
//       <ProjectListComponent onClick={this.handleClick} />
//     )
//   }
// }

class UserProfile extends React.Component {
  constructor(props){
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
  //  <Viewmore />
    
  }
  render(){
    const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"red"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User1</h4>
              <h4>Female</h4>
              <h4 className={classes.description}>
               No. of Rides 25
              </h4>
            
               <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
                
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"red"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User7</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 60
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"red"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User4</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 5
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"red"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User10</h4>
              <h4>Female</h4>
              <h4 className={classes.description}>
               No. of Rides 2
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"yellow"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User8</h4>
              <h4>Female</h4>
              <h4 className={classes.description}>
               No. of Rides 40
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"yellow"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User11</h4>
              <h4>Female</h4>
              <h4 className={classes.description}>
               No. of Rides 6
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"yellow"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User6</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 56
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"yellow"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User3</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 11
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"yellow"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User5</h4>
              <h4>Maale</h4>
              <h4 className={classes.description}>
               No. of Rides 7
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"green"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User8</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 9
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"green"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User12</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 57
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"green"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>UserA</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 45
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"green"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>User5</h4>
              <h4>Female</h4>
              <h4 className={classes.description}>
               No. of Rides 4
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem> <GridItem xs={6} sm={4} md={2}>
          <Card style={{backgroundColor:"green"}} profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>User1</h6> */}
              <h4 className={classes.cardTitle}>UserC</h4>
              <h4>Male</h4>
              <h4 className={classes.description}>
               No. of Rides 1
              </h4>
              <Link to="/table" >
               
               <Button color="info" round  >
               View More
               </Button>
               </Link>
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
}

export default withStyles(styles)(UserProfile);
