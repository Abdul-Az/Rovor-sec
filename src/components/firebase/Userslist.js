import React, { Component } from 'react';
import {firebaseApp} from "./base";
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class Userslist extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        firebaseApp.auth().submit();
    }
 
render() {
  return (
      <div style={{ alignItems: "center"}}>
    <CardDeck  style={{ width: '900px', height: '550px', margin: '30px' }}>
      <Card>
        <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Mumbai</CardTitle>
        <Form className="form">
        <Col>
        <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
        </CardBody>
      </Card>
      <Card >
      <CardImg top width="100%"  style={{ width: '400px', height: '400px' }} src={require("../firebase/TCS-01.png" )} alt="Card image cap" />
        <CardBody>
          <CardTitle>TCS Chennai</CardTitle>
        <Form className="form">
        <Col>
        <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
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
// export {Branches};
export default Userslist;