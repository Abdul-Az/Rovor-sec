import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';

class Piechart extends React.Component {
    componentDidMount() {
        //doughnut
        var ctxD = document.getElementById("doughnutChart").getContext('2d');
        new Chart(ctxD, {
            type: 'doughnut',
            data: {
                labels: ["Unsafe", "Safe", "Moderate"],
                datasets: [
                    {
                        data: [3, 8, 4],
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