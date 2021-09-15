# 색상과 배경

> [1. 색상 - HEX, rgb, rgba](#1-색상---hex-rgb-rgba)
>
> [2. opacity](#2-opacity)
>
> [3. background](#3-background)

<br><hr>

## 1. 색상 - HEX, rgb, rgba

- `color`는 3가지 표현법으로 정의할 수 있다.
  - 키워드 사용(blue, transparent 등)
  - `# + 16진수` 표기법, `rgb()`, `rgba()`
    - a가 0인 경우 완전한 투명, a가 1인 경우 불투명
  - hsl(), hsla()

```
div {
  color: #a9fc22;
  background-color: rgba(255, 0, 0, 0.8);
}
```

<br><hr>

# 2. opacity

- 요소의 불투명도를 설정
- 0.0 ~ 1.0 으로 설정(0인 경우 완전한 투명)
- `background-color` 의 a값을 조절하는 경우 텍스트는 투명해지지 않으나 `opacity`의 경우 모든 요소가 투명해진다.

<br><hr>

# 3. background

- `background-color` : 요소의 배경색을 지정. `background-image`가 설정되어 있으면 뒤에 렌더링 되므로, 이미지가 투명하면 그 곳을 통해 볼 수 있다.
- `background-image` : 요소의 배경 이미지를 지정. 이미지가 불투명 하더라도 `background-color`를 설정해야 한다. 이미지를 불러올 수 없는 상황에서 배경색이 대체할 수 있기 때문이다.
- `background-repeat` : 배경 이미지의 반복 방법을 지정. repeat-x, repeat, space, round, no-repeat 등의 값이 있다.
- `background-position` : 배경 이미지의 위치 지정.
- `background-origin` : 배경의 원점을 border 시작점, border 내부, padding 내부 중 하나로 지정. padding-box 가 기본값이다.
- `background-size` : 배경 이미지의 크기를 설정. cover, contain 또는 너비와 높이 값을 지정할 수 있다. 비율이 깨지지 않게 값을 지정하려면 하나만 값을 입력하면 width에 맞추어 비율이 맞게 지정이 된다.
  - `contain` : 이미지가 잘리거나 찌그러지지 않는 한도에서 가장 크게 설정
  - `cover` : 이미지가 찌그러지지 않는 한도 내에서 가장 크게 설정. 이미지의 가로 세로 비율이 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정한다.
- `background` : 배경 관련 값을 한번에 설정. color는 마지막에 위치해야 하며 size와 position을 함께 쓸 경우 position/size 형태로 써야 한다.

```
.container{
  background-color: rgba(122, 255, 34, 0.5);
  background-image: url("../images/example.png")

  /* 키워드 값 */
  background-repeat: no-repeat;
  /* 2개 값 구문: 가로 | 세로 */
  background-repeat: repeat space;

  background-position: bottom 50px right 100px;
  background-origin: border-box;
  background-size: contain;
}

.shorthand{
  background: no-repeat center/80% url("../img/image.png") blue;
}
```

<br><hr>

출처 : https://developer.mozilla.org/ko/docs/Web/CSS/color_value  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/opacity  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background-color  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background-image  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background-repeat  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background-origin  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background-size  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/background
