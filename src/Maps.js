import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
 
export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick  = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
        onMapClicked  = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

  render() {
          
    return (
      
        <Map google={this.props.google} 
        onClick={this.onMapClicked}
        initialCenter={{
            lat: 18.796143,
            lng: 98.979263
          }}
        zoom={15}>

         
 
        <Marker onClick={this.onMarkerClick}  name={'Current location'} />
        <Marker onClick={this.onMarkerClick}  name={'Mingmitr Coffee'}  position={{lat: 18.794221, lng: 98.970653}} />
        <Marker onClick={this.onMarkerClick}  name={'Wake up Coffee'}  position={{lat: 18.796687, lng: 98.966393}} />
        <Marker onClick={this.onMarkerClick}  name={'Starbucks Coffee'}  position={{lat: 18.794608, lng: 98.977948}} />
        <Marker onClick={this.onMarkerClick}  name={'Cafe Amazon Nimman 11'}  position={{lat: 18.798264, lng: 98.968592}} />
        <Marker onClick={this.onMarkerClick}  name={'Akha Ama La Fattoria'}  position={{lat: 18.789244, lng:  98.984986}} />
        <Marker onClick={this.onMarkerClick}  name={'Boonraksa Coffee By Wat Pansao'}  position={{lat: 18.793226, lng: 98.980394}} />
        <Marker onClick={this.onMarkerClick}  name={'Roastniyom Coffee'}  position={{lat: 18.798507, lng: 98.973313}} />
        <Marker onClick={this.onMarkerClick}  name={'Ristr8to Lab'}  position={{lat: 18.799370, lng: 98.968646}} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className="info_style"> 
              <a >{this.state.selectedPlace.name}</a>
            </div>
        </InfoWindow>
      </Map>

    
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCZ1BCe4Q7YL1nCa_ovtet4Bjn52tT20T8")
})(MapContainer)