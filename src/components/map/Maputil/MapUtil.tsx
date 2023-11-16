import React from "react";


type coordinate = {
    x:number,
    y:number
}

declare global {
    interface Window {
      kakao: any;
    }
}

export const MapInterpolation = (prev:coordinate,next:coordinate,inclination:number):coordinate => {
    const re_x = prev.x>next.x?prev.x-0.8:prev.x+0.8;
    const re_y = inclination*(re_x-prev.x) + prev.y;
    return {x:re_x,y:re_y}
}

export const Mapinclination = (prev:coordinate,next:coordinate) => (prev.y-next.y)/(prev.x-next.x)
