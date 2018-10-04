import React from 'react';
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import Calendar from 'react-calendar-material';
import MapContainer from "./GmapsAPI";
export default class ViewContainer extends React.Component {
  render() {
    return (
      <Container style={{display: 'flex', }}>
      
          <Col xs="24">
          <Calendar
    accentColor={'blue'}
    orientation={'flex-row'}
    showHeader={true}
    onDatePicked={(d) => {
      console.log('onDatePicked', d);
    }}/>
          </Col>
         
          
          <Col xs="24"><MapContainer/></Col>
        <Col xs="24">
        <Card body inverse color="primary" style={{height: '100%', width: "300px", marginLeft: "370px"}}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
        </Col>
      </Container>
    );
  }
}