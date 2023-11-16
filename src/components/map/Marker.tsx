import React from "react";
import test from "../../test.json"

declare global {
    interface Window {
      kakao: any;
    }
}

const {coordinate} = test;//marker가 원래 있어야 하는 장소
let MarkerArr = new Array(coordinate.length).fill(0).map((v,i)=>{
    const imageSrc = "./image/MapMarkerSvg.svg";
    const imageSize = new window.kakao.maps.Size(16,16);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)
    const {x,y}:{x:number,y:number} = coordinate[i];
    const markerPosition = new window.kakao.maps.LatLng(x,y);
    
    const marker = new window.kakao.maps.Marker({
        position:markerPosition,
        image:markerImage
    });
    return marker
})


export default MarkerArr