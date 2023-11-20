import React from "react";
import type { position } from "../../../@types/position";

type coordinate = {
    x:number,
    y:number,
    
}

type Marker = {
    marker:kakao.maps.Marker,
    id:string,
    status:string
}

export const MapInterpolation = (prev:coordinate,next:coordinate):coordinate => {//map 기울기 구하기 함수
    const inclination = (prev.y-next.y)/(prev.x-next.x);
    const re_x = prev.x>next.x?prev.x-0.5:prev.x+0.5;
    const re_y = inclination*(re_x-prev.x) + prev.y;
    return {x:re_x,y:re_y}
}

export const MapMove = (map:kakao.maps.Map, Marker: Marker[],position:position) => {
    if(position.status===null)
        return
    const new_marker = Marker[0].id===position.id?Marker[0].marker:Marker[1].marker;
    const imageSize = new window.kakao.maps.Size(16,16);
    if(position.status==="Inactive"){
        const imageSrc = "./image/MapMarkerSvgRed.svg";
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)
        new_marker.setImage(markerImage)
        return
    }
    else if(position.status==="Active"){
        const imageSrc = "./image/MapMarkerSvgGreen.svg";
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)
        new_marker.setImage(markerImage)
    }

    const mapProjection = map.getProjection();
    let prev = mapProjection.pointFromCoords(new_marker.getPosition());
    let next = mapProjection.pointFromCoords(new window.kakao.maps.LatLng(position.x,position.y));

    const markerMove = () =>{
        let new_prev = MapInterpolation(prev,next);//위치 좌표 받기
        let point = new window.kakao.maps.Point(new_prev.x,new_prev.y);//지도 좌표 변환 준비하기
        let new_coor = mapProjection.coordsFromPoint(point);//지도 좌표로 변환하기
        let screen = new window.kakao.maps.LatLng(new_coor.getLat(),new_coor.getLng());//마커 setPosition하기 위한
        prev.x = new_prev.x;
        prev.y = new_prev.y;
        new_marker.setPosition(screen);
        if(Math.round(new_prev.x)!==next.x)
            window.requestAnimationFrame(markerMove);
        if(isNaN(new_marker.getPosition().getLat())||isNaN(new_marker.getPosition().getLng())){
            MapCheck(position,Marker);
            return
        }
    }
    window.requestAnimationFrame(markerMove);
}

export const MapCheck = (position:position, Marker:Marker[]) =>{
    let cur_marker = Marker[0].id===position.id?Marker[0].marker:Marker[1].marker;
    cur_marker.setPosition(new window.kakao.maps.LatLng(position.x,position.y))
}


/*
Marker 확정 하려면 따로 받는게 좋다. 
*/ 
