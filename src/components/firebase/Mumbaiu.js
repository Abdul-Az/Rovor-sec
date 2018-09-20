import React,{Component} from 'react';
import {Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import firebase from "firebase";
import {firebaseApp} from "./base";
import database from "firebase/database";
import base from "./base";


class Mumbaiu extends Component {
   
    render() {
        const sum = Object.keys(this.props.users)
        const total =  sum.length
        const username = this.props.users
        //   console.log(username)
        return(
            <div >
                {username.map(obj => {
            return <ul > 
            {/* <Container  > */}
                <Row>
                <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  {/* <CardTitle>Total Users  {total} </CardTitle> */}
                  <CardSubtitle>{obj.Username}</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>   
              </Col>
              </Row>
              {/* </Container> */}
              </ul>
                })
                } </div>
         ) }
}  
export default Mumbaiu;