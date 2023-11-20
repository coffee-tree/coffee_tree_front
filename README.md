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
