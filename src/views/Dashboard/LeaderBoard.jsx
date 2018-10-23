import React from "react";
import Table from "components/Table/Table.jsx";

class LeaderBoard extends React.Component {

    componentDidMount() {
       
        const UserRef = firebase.database().ref().on("value", function(Data){
            
            const tripRoutes = Data.val().tripRoute
            const tripss = Data.val().trips
            const tripSpeedss = Data.val().tripSpeeds
            //User specefic data
            var userresult = Object.keys(Data.val().Users).map((userId) => {
                var obj = Data.val().Users[userId]
                obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
                obj.trips = Object.assign({userId},tripss[userId],)
                obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
                return obj
            })
             //for ride types (safe)
  let safe = userresult.map(obj =>{
    return Object.values(obj.trips).map(value => { 
      let { userId, ...y} = obj.trips
      return  Object.values(y).map(s => {                   
          return s.tripMaxSpeed })})
  })
  var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj <= 60})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var sr = saferides.map(obj =>{return obj[0]})
var sumsr = sr.reduce((a,b) => a+b,0)
//(moderate)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 60 && obj <= 70})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var mr = saferides.map(obj =>{return obj[0]})
var summr = mr.reduce((a,b) => a+b,0)
//(unsafe)
var safelist = safe.map(obj => {return obj.map(obj => {return obj.filter(obj => {return obj > 70})}) })
       var saferides = safelist.map(obj => {return obj.map(obj => {return obj.length})})
var usr = saferides.map(obj =>{return obj[0]})
var sumusr = usr.reduce((a,b) => a+b,0)

 //doughnut
 var ctxD = document.getElementById("doughnutChart").getContext('2d');
 new Chart(ctxD, {
     type: 'doughnut',
     data: {
         labels: [`Unsafe ${sumusr}`, `Safe ${sumsr}`, `Moderate ${summr}`],
         datasets: [
             {
                 data: [sumusr, sumsr, summr],
                 backgroundColor: ["red", "green", "yellow"],
                 hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
             }
         ]
     },
     options: {
         responsive: true
     }
 });

            this.setState({
                safe : sumsr,
                moderate: summr,
                unsafe:   sumusr,             
            })

            // console.log(this.state.sumusr)
        }.bind(this)) 
        
       
    }


    render() {
        return (
    <Table 
    root={{fontSize: "80px"}}
    tableHeaderColor="danger"
    tableHead={["Rank", "Name", "Rides", "Bike"]}
    tableData={ [
      ["1", "User5", "8", "Pulsar"],
      ["2", "User7", "20", "Honda City"],
      ["3", "User10", "50", "Discover"],
      ["4", "User3", "5", "Duke"]
    ]}
    />


        )
    }


}

export default LeaderBoard;
