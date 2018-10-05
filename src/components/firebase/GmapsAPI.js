// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

// const coords = {
//   lat: 51.5258541,
//   lng: -0.08040660000006028
// };

// const params = {v: '3.exp', key: 'AIzaSyDtPmqZu8BkTZ843CK70NHtazRFba3mlXU'};

// export default class MapContainer extends React.Component {

//   onMapCreated(map) {
//     map.setOptions({
//       disableDefaultUI: true
//     });
//   }

//   onDragEnd(e) {
//     console.log('onDragEnd', e);
//   }

//   onCloseClick() {
//     console.log('onCloseClick');
//   }

//   onClick(e) {
//     console.log('onClick', e);
//   }

//   render() {
//     return (
//       <Gmaps
//         width={'800px'}
//         height={'600px'}
//         lat={coords.lat}
//         lng={coords.lng}
//         zoom={12}
//         loadingMessage={'Be happy'}
//         params={params}
//         onMapCreated={this.onMapCreated}>
//         <Marker
//           lat={coords.lat}
//           lng={coords.lng}
//           draggable={true}
//           onDragEnd={this.onDragEnd} />
//         <InfoWindow
//           lat={coords.lat}
//           lng={coords.lng}
//           content={'Hello, React :)'}
//           onCloseClick={this.onCloseClick} />
//         <Circle
//           lat={coords.lat}
//           lng={coords.lng}
//           radius={500}
//           onClick={this.onClick} />
//       </Gmaps>
//     );
//   }

// };




import  React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDdAYc35phevNo058Bns6kL717WK4aYc6Y")
})(MapContainer)