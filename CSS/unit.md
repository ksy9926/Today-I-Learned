# 단위와 값

> [1. 절대길이](#1-절대길이)
>
> [2. 상대길이](#2-상대길이)
>
> [3. 퍼센트](#3-퍼센트)
>
> [4. 함수 표기법 - calc(), min(), max()](#4-함수-표기법---calc-min-max)

<br><hr>

## 1. 절대길이

- 상대적으로 변하는 값이 아니라 고정된 값
- `px` : 절대길이에서 거의 유일하게 쓰이는 값이다. 모니터를 확대했을 때 보이는 하나의 점이 1px이다. 절대길이를 사용하게 될 경우 브라우저의 글꼴 크기를 바꾸더라도 크기가 변하지 않는다. 그렇기에 접근성 측면에서 상대길이를 사용하는 것이 좋을 때가 있다.(ex. font-size)

<br><hr>

## 2. 상대길이

- 기준에 따라 크기가 상대적으로 변하는 값
- `em` : 부모의 크기에 대한 상대적인 크기
- `rem` : 최상단 부모(root)의 크기에 대한 상대적인 크기
- `vh` : 뷰포트의 백분율 높이. 반응형으로 만들 때 사용한다.
- `vw` : 뷰포트의 백분율 너비. 반응형으로 만들 때 사용한다.
- `vmin` : 뷰포트의 가로 세로 중 작은 값. 반응형으로 만들 때 가로 세로에 따른 변화를 줄 때 사용한다.
- `vmax` : 뷰포트의 가로 세로 중 큰 값. 반응형으로 만들 때 가로 세로에 따른 변화를 줄 때 사용한다.

```
/*
1em - 부모의 크기
1rem - root(body)의 크기
100vw - 뷰포트의 가로 길이
100vh - 뷰포트의 세로 길이
*/

.parent {
  font-size: 2em;
}

.child {
  font-size: 0.5em;
}

.container {
  background-color: coral;
  width: 50vw;
  height: 50px;
}
```

<br><hr>

## 3. 퍼센트

- `%` : 부모의 크기에 대한 백분율. 100% 일때 부모의 크기와 같다.

```
.parent {
  width: 100px;
  height: 100px;
}

.child {
  width: 50%;
  height: 30%;
}
```

<br><hr>

## 4. 함수 표기법 - calc(), min(), max()

- `calc()` : 계산식을 통해 단위를 여러 개 사용할 수 있다.
  - +, -, \*, / 네가지를 사용할 수 있다.
  - 곱셈은 하나 이상의 피연산자가 `<number>`이어야 한다.
  - 나눗셈은 오른쪽 피연산자가 `<number>`이어야 한다.
  - 0으로 나누면 HTML 구문분석기에서 오류가 발생한다.
  - 연산자의 좌우에는 공백이 있어야 한다.
- `min()` : 괄호 안의 값들 중 작은 값을 사용한다. 높이나 너비 지정시 `min-width` 등의 사용을 권장.
- `max()` : 괄호 안의 값들 중 큰 값을 사용한다. 높이나 너비 지정시 `max-width` 등의 사용을 권장.

```
.container {
  width: calc(100% - 80px);
  height: calc(100% / 6);
}

.box {
  width: min(100%, 500px);
  height: max(100%, 300px);
}
```

<br><hr>

참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/length  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/percentage  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/calc()  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/min()  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/max()
