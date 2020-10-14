import React from 'react';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/logo_mapa.jpg'

import '../styles/pages/ongs-map.css'



function OngsMap() {
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
        </Map>

        <Link to="" className="create-ong">
            <FiPlus size={32} color="#FFF"/>

        </Link>


     </div>
    );
}

export default OngsMap;