import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "../../index.css";

function ThirdSection() {
  const markers = [
    {
      geocode: [8.7832, 124.5085],
      popUp: "Excessive Phytoplankton",
    },
    // {
    //   geocode: [48.85, 2.3522],
    //   popUp: "Hello, I am pop up 2",
    // },
    // {
    //   geocode: [48.855, 2.34],
    //   popUp: "Hello, I am pop up 3",
    // },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    // iconUrl: require("./img/marker.png"),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true),
      className: "custom-marker-cluster",
    });
  };

  return (
    <MapContainer center={[8.7832, 124.5085]} zoom={13}>
      {/* <TileLayer
        attribution='&copy; <a href="https://nowcoast.noaa.gov/">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'     /> */}

      <TileLayer
        attribution="EsriWorldImagery"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        maxZoom={19}
        minZoom={0}
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          // eslint-disable-next-line react/jsx-key
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
export default ThirdSection;
