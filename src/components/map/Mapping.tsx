import React ,{useEffect} from "react";
import Marker from "./Marker";
import {MapInterpolation} from "./Maputil/MapUtil";
import usePosition from "../../hook/usePosition";

import "./Mapping.css"

declare global {
    interface Window {
      kakao: any;
    }
  }
const Mapping = () => {
    const position = usePosition();
    useEffect(()=>{
        const mapContainer = document.querySelector(".map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.5476, 127.0744),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        map.setZoomable(false);
        Marker.setMap(map);
        const mapProjection = map.getProjection();
        let prev = mapProjection.pointFromCoords(Marker.getPosition());
        let next = mapProjection.pointFromCoords(new window.kakao.maps.LatLng(position.x,position.y));
        console.log(position);

        const markerMove = () =>{
            let new_prev = MapInterpolation(prev,next);//위치 좌표 받기
            let point = new window.kakao.maps.Point(new_prev.x,new_prev.y);//지도 좌표 변환 준비하기
            let new_coor = mapProjection.coordsFromPoint(point);//지도 좌표로 변환하기
            let screen = new window.kakao.maps.LatLng(new_coor.Ma,new_coor.La);//마커와 setPosition하기 위한
            prev = new_prev;
            Marker.setPosition(screen);
            if(new_prev.x!==next.x)
                window.requestAnimationFrame(markerMove);
        }
        window.requestAnimationFrame(markerMove);
        
    },[position])
    return (
        <div className="map">

        </div>
    )
}

export default Mapping;