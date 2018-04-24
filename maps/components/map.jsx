import React from 'react';

// initial map options
const mapOptions = {
// San Francisco coordinates
  center: {
    lat: 37.797236,
    lng: -122.413673
  },
  zoom: 12
};
// create a Google Maps bicycling layer
const bikeLayer = new google.maps.BicyclingLayer();
// create a Google Maps directions service object
const directionsService = new google.maps.DirectionsService();
// create a Google Maps directions rendering object
const directionsDisplay = new google.maps.DirectionsRenderer({
    suppressBicyclingLayer: true
  });
// create a Google Maps elevation service object
const elevationService = new google.maps.ElevationService;

class MapPage extends React.Component {
  constructor() {
    super();
    this.state = {
          // array of Google Maps Marker objects
          markers: [],
          // boolean indicating if the bike layer is displayed
          layerOn: false,
          // distance of the route in miles
          distance: null,
          // distance of the route in a string
          distString: "",
          // elevation gain of the route
          elevation: null,
          // elevation gain in a string
          eleString: "",
          // polyline string needed to re-render the route on a Google map
          polyline: "",
          // boolean indicating if the create button is disabled
          createDisabled: true,
          // boolean indicating if the errors icon should be visible
          showErrors: false
        };
  }

  componentDidMount() {
    // get JSX element for map container
    const mapElement = this.refs.map;
    // create a new Google map attached to JSX map container
    // using the defined map options above
    this.route_map = new google.maps.Map(mapElement, mapOptions);
    // clears the direction display object from the route map
    // prevents old routes from being shown upon revisit
    directionsDisplay.setMap(null);
    // center map on user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.route_map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      // TODO: Maybe turn this into an error message or remove entirely
      console.log("Geolocation is not supported by this browser.");
    }
    // add event listener to the Google map
    // this.addMapListeners();
  }

  render() {
    return (
      <div className="maps-main">
        <div className="map" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default MapPage;
