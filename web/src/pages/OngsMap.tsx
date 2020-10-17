import React, { useEffect, useState }  from 'react';
import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../images/mark2.png'
import mapIcon from "../utils/mapIcon";

import '../styles/pages/ongs-map.css'
import api from '../services/api';

// const mapIcon = Leaflet.icon({
//     iconUrl: mapMarkerImg,
// })

interface Ong {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }
  
function OngsMap(){
    const [ongs, setOngs] = useState<Ong[]>([]);
  
    useEffect(() => {
      api.get("/ongs").then(({ data }) => {
        setOngs(data);
      });
    }, []);
    
    return (
     <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy"/>

                <h2> Escolha uma Ong no mapa</h2>
                <p>Muitas vidas podem ser salvas :) Ajude como puder!</p>
            </header>
            <footer>
                <strong> Guarulhos </strong>
                <span> São Paulo </span>
            </footer>
        </aside>
        <Map
            center={[-23.4429107,-46.4244085]}
            zoom={16}
            style={{width:'100%', height:"100%"}}
       >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {ongs.map((ong) => {
          return (
            <Marker
              key={ong.id}
              icon={mapIcon}
              position={[ong.latitude, ong.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {ong.name}
                <Link to={`/ongs/${ong.id}`}>
                  <FiArrowRight size="20" color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
        </Map>

        <Link to="/ongs/create" className="create-ong">
            <FiPlus size={32} color="#FFF"/>

        </Link>


     </div>
    );
}

export default OngsMap;