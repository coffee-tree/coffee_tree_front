import React from "react";

declare global {
    interface Window {
      kakao: any;
    }
}

const imageSrc = "./image/MapMarkerSvg.svg";
const imageSize = new window.kakao.maps.Size(16,16);
const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)
const markerPosition = new window.kakao.maps.LatLng(37.550305, 127.075238);
const Marker = new window.kakao.maps.Marker({
    position:markerPosition,
    image:markerImage
});



export default Marker