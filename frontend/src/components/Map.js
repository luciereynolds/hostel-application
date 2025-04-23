import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useFetchData from "./useFetchData";
import { Icon } from "leaflet";

const Map = () => {
  const { hostels } = useFetchData(); //uses data from the backend.

  const icon = new Icon({
    iconUrl: "/hostel-icon.svg", // svg icon for showing where hostels are located.
    iconSize: [30, 30],
  });

  const initialMarker = {};
  const [activeLocation, setActiveLocation] = useState(initialMarker);
  const position = [57.6942, -4.6032]; // sets Map to more central location for Hostels

  const markerClicked = (properties) => {
    setActiveLocation(properties);
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={9}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hostels.map((hostel) => (
          <Marker
            key={hostel.id}
            position={[hostel.location.lat, hostel.location.long]}
            icon={icon}
            eventHandlers={{
              click: () => markerClicked(hostel),
            }}
          >
            <Popup>
              <div className="popup" role="alert">
                Here is the location of the {hostel.name}.
                <br />
                {hostel.address}
                <br />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="info">
        {activeLocation ? (
          <>
            You have currently selected {activeLocation.name}.
          </>
        ) : (
          <p>No hostel selected</p>
        )}
      </div>
    </>
  );
};

export default Map;