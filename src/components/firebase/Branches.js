import React, { Component } from 'react';
import {firebaseApp} from "./base";
import { BrowserRouter as Router , NavLink , Link , Redirect} from 'react-router-dom';
import {  FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
    Container, Col, Form, Label, Input,Button 
  } from 'reactstrap';
import Userslistm from './Userslistm';
import Userslistc from './Userslistc';
// import {  Route, Link } from "react-router-dom";

class Branches extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            password: "",
            showComponent: false,
          };
     this.logout = this.logout.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }

    handleChange(event) {
        this.setState({ password: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.state.password === "adminm" || "adminc" ?
        this._onButtonClick() : alert("Wrong password")


    }

    logout() {
        firebaseApp.auth().signOut();
    }
 
render() {
     if (this.state.showComponent && this.state.password === "adminm")
      {
        return (
        <div>
          <nav>
          <Link to = "/Userslistm" ><Userslistm/></Link>
         </nav> 
         </div>
        )}
    else if (this.state.showComponent && this.state.password === "adminc") 
    {
      return (
        <div>
          <nav>
          <Link to = "/Userslistc" ><Userslistc/></Link>
         </nav> 
         </div>
        )}
    else
    {
  return (
      <div style={{ alignItems: "center"}}>
    <CardDeck  style={{ width: '900px', height: '550px', margin: '30px' }}>
      <Card>
        <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Mumbai</CardTitle>
        <Form  onSubmit={this.handleSubmit} className="form">
        <Col>
        <FormGroup>
        {/* <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            /> */}
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button type="submit">Submit</Button>
          {/* {this.state.showComponent ?
           <Userslist /> :
           null} */}

        </Form>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Chennai</CardTitle>
        <Form  onSubmit={this.handleSubmit} className="form">
        <Col>
        <FormGroup>
        {/* <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            /> */}
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button type="submit">Submit</Button>
          {/* {this.state.showComponent ?
           <Userslist /> :
           null} */}

        </Form>
        </CardBody>
      </Card>
    </CardDeck>
    <Button style={{margin: "20px" }} onClick={this.logout}>Logout</Button>
    </div>
  );
}
}
}
// export {Branches};
export default Branches;