// DoctorsMap.js
/*global google*/
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, BicyclingLayer, DirectionsRenderer } from "react-google-maps";
import DoctorMarker from "./GmapsMarker";
import MapWithADirectionsRenderer from "./GmapsWithDirections";

const DoctorsMap = withScriptjs(withGoogleMap((props) =>{

  // componentDidMount() {
  //   const DirectionsService = new google.maps.DirectionsService();

  //   DirectionsService.route({
  //     origin: new google.maps.LatLng(41.8507300, -87.6512600),
  //     destination: new google.maps.LatLng(41.8525800, -87.6514100),
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   }, (result, status) => {
  //     if (status === google.maps.DirectionsStatus.OK) {
  //       this.setState({
  //         directions: result,
  //       });
  //     } else {
  //       console.error(`error fetching directions ${result}`);
  //     }
  //   });
  // }
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  19.9975, lng: 73.789803 } }
        >
         {<Marker position={{ lat: 19.9975, lng: 73.789803 }} />}
         {/* <BicyclingLayer autoUpdate /> */}
         <MapWithADirectionsRenderer directions={props.directions} />
        {/* {markers} */}
      </GoogleMap>
    );
  }
))

export default DoctorsMap;


