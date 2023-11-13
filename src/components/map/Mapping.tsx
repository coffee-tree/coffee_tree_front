import React ,{useEffect} from "react";
import MarkerArr from "./Marker";
import "./Mapping.css"

declare global {
    interface Window {
      kakao: any;
    }
  }
const Mapping = () => {
    useEffect(()=>{
        const mapContainer = document.querySelector(".map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        MarkerArr.forEach(ele=>{
            ele.setMap(map);
        })
    },[])
    return (
        <div className="map">

        </div>
    )
}

export default Mapping;