import React, { Fragment } from 'react';
import { Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import Calendar from 'react-calendar-material';
import MapContainer from "./GmapsAPI";
import CalendarHeatmap from 'reactjs-calendar-heatmap';
import dayjs from 'dayjs';
export default class ViewContainer extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    
    handleClick(d) {
        let myDate = d.toISOString().substring(0, 10 )
        let datePicked =  dayjs(myDate).format('DD-MM-YYYY')
        var obj = this.props.tripdetails
        var tripdata =  Object.values(obj.trips).map(value => { 
       let { userId, ...y} = obj.trips
       return  Object.values(y).map(s => {                   
           return s.tripDate })})
    //    console.log(tripdata[0][0])
               
                   return  tripdata.map( function( row ) {
                     return row.filter((x) => x === datePicked).length  });

        
    }

    


  render() {

    
//  this.handleClick = (d) => {
//     let myDate = d.toISOString().substring(0, 10 )
//     let datePicked =  dayjs(myDate).format('DD-MM-YYYY')
//     var myDates =  tripdata.map( function( row ) {
//       return row.filter((x) => x === datePicked).length  });
//    }



    return (
<Fragment>
       
      <Container style={{display: 'flex', }}>
      
         
   

     
     
      
 <Col xs="24">
          <Calendar
    accentColor={'blue'}
    orientation={'flex-row'}
    showHeader={true}
    onDatePicked={(d) => {
      return this.handleClick(d)
    }
 }/>

 </Col>
          <Col xs="24"><MapContainer/></Col>
        <Col xs="24">
        <Card body inverse color="primary" style={{height: '100%', width: "300px", marginLeft: "370px"}}>
        <CardTitle>No. of trips {}</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
        </Col>
       
      </Container>
      </Fragment>
    );
  }
}