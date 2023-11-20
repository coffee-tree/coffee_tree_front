import React from "react";

declare global {
    interface Window {
      kakao: any;
    }
}


const imageSrc = "./image/MapMarkerSvgGreen.svg";
const imageSize = new window.kakao.maps.Size(16,16);
const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize)
const markerPosition1 = new window.kakao.maps.LatLng(37.550305, 127.075238);
const markerPosition2 = new window.kakao.maps.LatLng(37.550725, 127.074209);
const iwContent1 = '<div style="padding:5px;">3DF92-192</div>';
const iwContent2 = '<div style="padding:5px;">4HHC2-392</div>';
let infowindow1 = new kakao.maps.InfoWindow({
    content : iwContent1
});
let infowindow2 = new kakao.maps.InfoWindow({
    content : iwContent2
});

const Marker1 = new window.kakao.maps.Marker({
    position:markerPosition1,
    image:markerImage,
});

const Marker2 = new window.kakao.maps.Marker({
    position:markerPosition2,
    image:markerImage
});

kakao.maps.event.addListener(Marker1, 'mouseover', function() {
    infowindow1.open(Marker1.getMap(), Marker1);
});

kakao.maps.event.addListener(Marker1, 'mouseout', function() {
    infowindow1.close();
});

kakao.maps.event.addListener(Marker2, 'mouseover', function() {
    infowindow2.open(Marker2.getMap(), Marker2);
});

kakao.maps.event.addListener(Marker2, 'mouseout', function() {
    infowindow2.close();
});

export default [{marker:Marker1,id:"3DF92-192",status:"Active"},{marker:Marker2,id:"4HHC2-392",status:"Active"}]
