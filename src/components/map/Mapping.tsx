import React ,{useEffect,useState} from "react";
import Marker from "./Marker";
import { MapMove } from "./Maputil/MapUtil";
import usePosition from "../../hook/usePosition";

import "./Mapping.css"

declare global {
    interface Window {
      kakao: any;
    }
  }
const Mapping = () => {
    const position = usePosition();
    const [newMap,setNewMap] = useState<kakao.maps.Map>();
    useEffect(()=>{
        const [Marker1,Marker2] = Marker;
        const mapContainer = document.querySelector(".map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.550725, 127.074209),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        setNewMap(map);
        //map.setDraggable(false);
        Marker1.marker.setMap(map);
        Marker2.marker.setMap(map);
    },[])
    if(newMap)
        MapMove(newMap,Marker,position);
    return (
        <div className="map">
        </div>
    )
}
//2대 가정 -> id미리 알아야 한다. 
export default Mapping;