# COFFEE_TREE_FRONT

일회용품을 줄이고 다회용품을 많이 사용하자!

```
iot, ai를 접목시켜 다회용품의 수거율을 높이기 위해 개발하였습니다.
```

### 문제상황

iot의 실시간 좌표를 받아 지도를 다시 reload하는 방식은 점멸현상이 생겨 사용자가 보기에 부담이 있어습니다. 이를 위해 마커가 자연스럽게 움직이는 함수를 개발하였습니다.

### 코드 정리

KAKAO MAP API MARKER 움직이기

1. 마커의 실제 좌표를 받는다. -> screen 좌표로 변환
2. 마커의 이동을 원하는 실제좌표를 받는다. -> screen 좌표로 변환
3. screen 좌표를 기반으로 움직인다.

requestAnimationFrame, interpolation 고려
mapProjection.pointFromCoords() -> 스크린 좌표를 변환
mapProjection.coordsFromPoint() -> 지도 좌표로 변환
#### map의 두 좌표간의 interpolation을 구하기 함수 -> 간단하게 일차함수로 구현했습니다.

```
export const MapInterpolation = (prev:coordinate,next:coordinate):coordinate => {
    const inclination = (prev.y-next.y)/(prev.x-next.x);
    const re_x = prev.x>next.x?prev.x-0.5:prev.x+0.5;
    const re_y = inclination*(re_x-prev.x) + prev.y;
    return {x:re_x,y:re_y}
}
```

#### 마커 이동 애니메이션

```
  let prev = mapProjection.pointFromCoords(new_marker.getPosition());//screen 좌표변환
  let next = mapProjection.pointFromCoords(new window.kakao.maps.LatLng(position.x,position.y));//screen 좌표변환
  const markerMove = () => {
        let new_prev = MapInterpolation(prev,next);//이동해야할 screen 좌표 받기
        let point = new window.kakao.maps.Point(new_prev.x,new_prev.y);//screen 좌표 실제 좌표로 변환 준비하기
        let new_coor = mapProjection.coordsFromPoint(point);//실제 좌표로 변환하기
        let screen = new window.kakao.maps.LatLng(new_coor.getLat(),new_coor.getLng());//마커 setPosition하기 위한 준비
        prev.x = new_prev.x;//type이 같지 않아 하나씩 대입했습니다.
        prev.y = new_prev.y;
        new_marker.setPosition(screen);
        if(Math.round(new_prev.x)!==next.x)//멈추기 위한 조건(round를 쓰지 않으면 소수점으로 인해 마커가 진동)
            window.requestAnimationFrame(markerMove);
    }
    window.requestAnimationFrame(markerMove);
```
