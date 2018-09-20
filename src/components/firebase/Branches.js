import React, { Component } from 'react';
import {firebaseApp} from "./base";
import { BrowserRouter as Router , NavLink , Redirect } from 'react-router-dom';
import {  FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
    Container, Col, Form, Label, Input,Button 
  } from 'reactstrap';
import Userslist from './Userslist';

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
        this.state.password === "admin" ?
        this._onButtonClick() : alert(this.state.password)
    }

    logout() {
        firebaseApp.auth().signOut();
    }
 
render() {
     if (this.state.showComponent) {
        return <Userslist/>;
    }
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
      <Card >
      <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Chennai</CardTitle>
        <Form className="form">
        <Col>
       <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            //   value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
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