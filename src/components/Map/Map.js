import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

export default function Map(props) {
    console.log(props.restaurant)
    const {
        coordinates,
        name,
        location
    } = props.restaurant;

    if (coordinates.latitude && coordinates.longitude && location.display_address) {

        const {latitude, longitude} = coordinates;
        const disp_add = location.display_address.join(' ');
        const map_url = 'https://maps.google.com?q=' + location.display_address.join('+')
        return (
            <div className="map">
                <MapContainer center={[latitude, longitude]} zoom={15} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            <a target="_blank" rel="noreferrer" href={map_url}>
                                {name} <br /> {disp_add}
                            </a>

                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    } else {
        return (<div />)
    }
}
