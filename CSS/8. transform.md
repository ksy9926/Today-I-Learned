# transform

> [1. transform 이란?](#1-transform-이란)
>
> [2. 크기 - scale](#2-크기---scale)
>
> [3. 회전 - rotate](#3-회전---rotate)
>
> [4. 이동 - transition](#4-이동---transition)
>
> [5. 기울이기 - skew](#5-기울이기---skew)
>
> [6. 기준점 - transform-origin](#6-기준점---transform-origin)

<br><hr>

## 1. transform 이란?

- 요소에 회전, 크기 조절, 기울이기, 이동 효과 등 다양한 효과를 부여할 수 있다.
- 여러 개의 함수를 한번에 적용시킬 수도 있으며 변형함수는 왼쪽에서 오른쪽으로 곱해진다. 즉 요소에 변형을 오른쪽부터 왼쪽으로 순서대로 하나씩 적용하는 것과 같다.

<br><hr>

## 2. 크기 - scale

- 요소의 크기를 조절한다. width, height를 조절하는 것과 다르게 다른 요소에 영향을 주지 않는다.

```
/* 가로로 1.5배, 세로로 2배 크게 적용 */

.scale{
  transform: scale(1.5, 2);
}

/* 가로, 세로 모두 0.5배 */

.small{
  transform: scale(0.5, 0.5);
}

/* 가로만 1.5배 */

.horizontal {
  transform: scaleX(1.5);
}

```

<br><hr>

## 3. 회전 - rotate

- 요소를 오른쪽으로 회전한다. 단위는 각도를 사용. 음수로 값을 줄 경우 왼쪽으로 회전한다.

```
.rotate {
  transform: rotate(90deg);
}
```

<br><hr>

## 4. 이동 - transition

- 요소를 x, y 좌표로 이동한다. x축만 이동할 때는 translateX, y축만 이동할 때는 translateY를 사용한다.
- scale의 경우 값을 하나만 입력하면 x, y 모두 커지지만 translate의 경우 값을 하나만 적으면 x축만 움직이고 y축은 0을 적은 것과 같게 된다.

```
.translate {
  transform: translate(100px, 200px);
}
```

<br><hr>

## 5. 기울이기 - skew

- 요소를 기울인다. x축만 기울일 때는 skewX, y축만 기울일 때는 skewY를 사용한다.
- scale의 경우 값을 하나만 입력하면 x, y 모두 커지지만 skew의 경우 값을 하나만 적으면 x축만 기울어지고 y축은 0을 적은 것과 같게 된다.

```
.skew {
  transform: skew(15deg, 15deg);
}
```

<br><hr>

## 6. 기준점 - transform-origin

- transform 의 기준점을 정한다. 기본값은 center이다.

```
#origin {
  transform-origin: top left;
}
```

<br><hr>

출처 : https://developer.mozilla.org/ko/docs/Web/CSS/transform  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/transform-function  
출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
