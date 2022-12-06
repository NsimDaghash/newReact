import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const REACT_APP_GOOGLE_KEY = "";  // place your Google Api key here , see README.md

function Map() {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 32.109333, lng: 34.855499 }}
    >
        <Marker
          position={{
            lat: 34.855499,
            lng: 32.109333,
          }}
        />

    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
