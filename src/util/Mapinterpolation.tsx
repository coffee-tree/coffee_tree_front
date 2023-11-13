import React from "react";

type coordinate = {
    x:number,
    y:number
}

export const MapInterpolation = (prev:coordinate,next:coordinate):coordinate => {
    const inclination = (prev.y-next.y)/(prev.x-next.x); //기울기
    const re_x = prev.x>next.x?prev.x+1:next.x+1;
    const re_y = inclination*(re_x-prev.x) + next.y;
    return {x:re_x,y:re_y}
}

//prev에서 next로 x 기준 이동