import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import Userstable from "../../components/firebase/Userstable";

class UserProfile extends React.Component {
constructor(props){
  super(props)

}


render() {
  var username = [{
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  },
  {
    user : "User1",
    gender : "Male",
    status : "Online",
    trips : 20
  
  }]
  
  return (
    <CardColumns>
      

                 <Card body inverse color="danger"  >
                 <CardTitle>User7</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 20</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="danger"  >
                 <CardTitle>User8</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 114</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="danger"  >
                 <CardTitle>User10</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 23</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="warning"  >
                 <CardTitle>User9</CardTitle>
                 <CardTitle>Female</CardTitle>
                 <CardTitle>No. of rids 51</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="warning"  >
                 <CardTitle>User4</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 70</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="warning"  >
                 <CardTitle>User3</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 5</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="warning"  >
                 <CardTitle>User12</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 42</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>User10</CardTitle>
                 <CardTitle>Female</CardTitle>
                 <CardTitle>No. of rids 3</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>User5</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 1</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>User2</CardTitle>
                 <CardTitle>Female</CardTitle>
                 <CardTitle>No. of rids 17</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>User2</CardTitle>
                 <CardTitle>Female</CardTitle>
                 <CardTitle>No. of rids 8</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>UserA</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 11</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>User14</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 4</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>UserC</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 20</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               <Card body inverse color="success"  >
                 <CardTitle>UserB</CardTitle>
                 <CardTitle>Male</CardTitle>
                 <CardTitle>No. of rids 21</CardTitle>
                 <Button color="secondary">View More</Button>
               </Card>
               

          
                
    
      
   </CardColumns>
  );
  }
}
export default UserProfile;