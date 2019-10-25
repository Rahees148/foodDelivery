import React, { Component } from 'react';

import Container from '@material-ui/core/Container';


import './location.scss';
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            geolocation: false
        };
        this.getLocation = this.getLocation.bind(this);
        this.showPosition = this.showPosition.bind(this);
    }
    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else { 
            this.setState({
                geolocation : false
            });
        }
    }
    showPosition(position) {
        this.setState({
            geolocation: true,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
            }
        )
    }

  render() {
      const isGeoAccessable = this.state.geolocation;
    return (

        <div className="location">
          <Container >
            <span className="count">356</span> 
            restaurants matched your location:  
            <span className="userLocation">TPM</span> – 
            <a href="">Change Address</a>
            { isGeoAccessable ? (
              <div><p> Latitude:   {this.state.latitude}</p>
               <p>longitude: {this.state.longitude}</p> </div>
            ) : (<p>your browser does not support geolocation</p>)
            }
          </Container>
        </div>
    );
  }
}


export default Location;
