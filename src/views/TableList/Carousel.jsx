import React from "react";
import { Carousel } from 'react-bootstrap';
// import {LineChart} from "react-d3-components";
// react plugin for creating charts
// import DisplayContainer from "./Chart";
import SimpleMap from "./Gmaps";


class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      // alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;


var biPolarBarChartData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};
var biPolarBarChartOptions = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
}

  
      return (
        <Carousel
          activeIndex={index}
          // direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            {/* <img width={900} height={500} alt="900x500" src={require("../../assets/img/blackspot.PNG" )} /> */}
            <div width={900} height={500}>
            <SimpleMap />
              </div>
           
            <Carousel.Caption>
              
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require("../../assets/img/Linegraph.png" )} />
            <Carousel.Caption>
             
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require("../../assets/img/break.png" )} />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  export default ControlledCarousel