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

export const MapInterpolation = (prev:coordinate,next:coordinate):coordinate => {
    const inclination = (prev.y-next.y)/(prev.x-next.x);
    const re_x = prev.x>next.x?prev.x-0.5:prev.x+0.5;
    const re_y = inclination*(re_x-prev.x) + prev.y;
    return {x:re_x,y:re_y}
}
