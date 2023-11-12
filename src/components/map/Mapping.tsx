import React ,{useEffect} from "react";
import test from "../../test.json"
import "./Mapping.css"

declare global {
    interface Window {
      kakao: any;
    }
  }

const Mapping = () => {
    useEffect(()=>{
        const {coordinate} = test;
        const mapContainer = document.querySelector(".map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        coordinate.forEach(({x,y}:{ x: number; y: number; })=>{
            const markerPosition = new window.kakao.maps.LatLng(x,y);
            const marker = new window.kakao.maps.Marker({
                position:markerPosition
            });
            marker.setMap(map);
        })
        console.log(coordinate);
    },[])
    return (
        <div className="map">

        </div>
    )
}

export default Mapping;