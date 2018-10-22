
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import React,{Component} from 'react';

import firebase from "firebase";
import {firebaseApp} from "../../components/firebase/base";
import database from "firebase/database";
import base from "../../components/firebase/base";
// import Mumbaiu from "./Mumbaiu";
// import Chennaiu from "./Chennaiu";
// import CustomizedTable from "./Userstable";
import _ from "underscore";
// import { TimeConverter } from './Timeconverter';

class Piechart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            safe : [],
            moderate : [],
            unsafe : [],
        }
    }
    
    componentDidMount() {
       
        const UserRef = firebase.database().ref().on("value", function(Data){
            
            const tripRoutes = Data.val().tripRoute
            const tripss = Data.val().trips
            const tripSpeedss = Data.val().tripSpeeds
            var userresult = Object.keys(Data.val().Users).map((userId) => {
                var obj = Data.val().Users[userId]
                obj.tripRoute = Object.assign({userId},tripRoutes[userId],)
                obj.trips = Object.assign({userId},tripss[userId],)
                obj.tripSpeeds = Object.assign({userId},tripSpeedss[userId],)
                return obj
            })
            var notrips = userresult.map(user => {
                return  Object.keys(user.trips).length - 1; 
                
                })
            this.setState({
                Allusers : userresult,
               
            })
        }.bind(this)) 
    
        //doughnut
        var ctxD = document.getElementById("doughnutChart").getContext('2d');
        new Chart(ctxD, {
            type: 'doughnut',
            data: {
                labels: ["Unsafe 25%", "Safe 55%", "Moderate 20%"],
                datasets: [
                    {
                        data: [30, 80, 40],
                        backgroundColor: ["red", "green", "yellow"],
                        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    }
    render() {
        return (
        <Container>
          <canvas id="doughnutChart"></canvas>
        </Container>
        );
    }

};

export default Piechart;