import React ,{useEffect} from "react";
import MarkerArr from "./Marker";
import {MapInterpolation, Mapinclination} from "./Maputil/MapUtil";

import test from "../../test.json"
import "./Mapping.css"

declare global {
    interface Window {
      kakao: any;
    }
  }
const {coordinate} = test;
const Mapping = () => {
    useEffect(()=>{
        const mapContainer = document.querySelector(".map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        
        const mapProjection = map.getProjection();
        let prev = mapProjection.pointFromCoords(new window.kakao.maps.LatLng(coordinate[4]["x"],coordinate[4]["y"]));
        let next = mapProjection.pointFromCoords(new window.kakao.maps.LatLng(33.450701, 126.570667));
        const inclination = Mapinclination(prev,next);
        MarkerArr.forEach(ele=>{
            ele.setMap(map);
        })
        const markerMove = () =>{
            let new_prev = MapInterpolation(prev,next,inclination);//위치 좌표 받기
            let point = new window.kakao.maps.Point(new_prev.x,new_prev.y);//지도 좌표 변환 준비하기
            let new_coor = mapProjection.coordsFromPoint(point);//지도 좌표로 변환하기
            let screen = new window.kakao.maps.LatLng(new_coor.Ma,new_coor.La);//마커와 setPosition하기 위한
            prev = new_prev;
            MarkerArr[4].setPosition(screen);
            if(new_prev.x!==next.x)
                window.requestAnimationFrame(markerMove);
        }
        window.requestAnimationFrame(markerMove);
    },[])
    return (
        <div className="map">

        </div>
    )
}

export default Mapping;