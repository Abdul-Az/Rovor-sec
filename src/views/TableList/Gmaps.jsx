// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, BicyclingLayer, DirectionsRenderer } from "react-google-maps";
import DoctorMarker from "./GmapsMarker";

const DoctorsMap = withScriptjs(withGoogleMap((props) =>{

  // const markers = props.doctors.map( doctor => <DoctorMarker
  //                   key={doctor.uid}
  //                   doctor={doctor}
  //                   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
  //                 />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  19.9975, lng: 73.789803 } }
        >
         {<Marker position={{ lat: 19.9975, lng: 73.789803 }} />}
         <BicyclingLayer autoUpdate />
         <DirectionsRenderer directions={props.directions} />
        {/* {markers} */}
      </GoogleMap>
    );
  }
))

export default DoctorsMap;


