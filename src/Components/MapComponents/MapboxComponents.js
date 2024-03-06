import React, {useEffect, useState, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { environment } from '../../Environments/EnvDev';
import '../../App.css';

mapboxgl.accessToken = environment.mapbox.accessToken;

const MapboxComponent = () => {
    const mapContainerRef = useRef(null);
    const map = useRef(null);
  
    const [lng] = useState(-58.2352); 
    const [lat] = useState(-32.4849); 
    const [zoom] = useState(2);
  
      useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,          
            style: 'mapbox://styles/mapbox/standard',
            center: [lng, lat],
            zoom: 12, 
            pitch: 45, 
            bearing: -17.6 
        });
  
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  
      map.current.on("load", ()=> {
          map.current.resize();
      })
  
      return () => map.current.remove();
    }, [lat, lng, zoom]); 
  
    return (
      <div className='map-container' ref={mapContainerRef} />
    );
  };
  
  export default MapboxComponent;

