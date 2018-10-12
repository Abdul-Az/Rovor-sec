import React from "react";
import d3 from "react-d3";
import {LineChart} from "react-d3";

class DisplayContainer extends React.Component {
  constructor() {
    super();
 
    this.state = {
        data: [
          {date: '2015-01-18', rate: 1.5 },
          {date: '2015-01-17', rate: 3 },
          {date: '2015-01-16', rate: 5 },
          {date: '2015-01-15', rate: 9 }
        ],
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0
    }
  }
 
  componentDidMount() {
    let maxDate = new Date(this.state.data[0].date);
    let minDate = new Date(this.state.data[this.state.data.length-1].date);
    let minMaxArr = this.state.data.map(function(arr, i) {
        return arr.rate;
    });
    let maxY = d3.max(minMaxArr, function(data) {
      return data;
    });
    let minY = d3.min(minMaxArr, function(data) {
      return data;
    });
 
    this.setState({xMin: minDate, xMax: maxDate, yMin: minY, yMax: maxY});
 
  }
 
  render() {
    return (
      <LineChart
              data={this.state.data}
              xMin={this.state.xMin}
              xMax={this.state.xMax}
              yMin={this.state.yMin}
              yMax={this.state.yMax}/>
    );
  }
};

export default  DisplayContainer;