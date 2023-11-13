import React from "react";
import test from "../../test.json"

declare global {
    interface Window {
      kakao: any;
    }
}

const {coordinate} = test;//marker가 원래 있어야 하는 장소
let MarkerArr = new Array(coordinate.length).fill(0).map((v,i)=>{
    const {x,y}:{x:number,y:number} = coordinate[i];
    const markerPosition = new window.kakao.maps.LatLng(x,y);
    return new window.kakao.maps.Marker({
        position:markerPosition
    });
})

export default MarkerArr