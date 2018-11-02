
// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "./Gmaps";

export default class DoctorsMapContainer extends React.Component {

	render() {
		return (
			<DoctorsMap
				doctors={this.props.doctors}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA6oNtiGFIu80weprPg0u704U1VuOCjzOo&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}