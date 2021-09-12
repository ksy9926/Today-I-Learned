# flex

> [1. flexbox 개요](#1-flexbox-개요)
>
> [2. Container - display](#2-container---display)
>
> [3. Container - flex-direction, flex-wrap, flex-flow](#3-container---flex-direction-flex-wrap-flex-flow)
>
> [4. Container - justify-content, align-items, align-content](#4-container---justify-content-align-items-align-content)
>
> [5. Item - order](#5-item---order)
>
> [6. Item - flex-grow, flex-shrink, flex-basis, flex](#6-item---flex-grow-flex-shrink-flex-basis-flex)
>
> [7. Item - align-self](#7-item---align-self)

<br><hr>

## 1. flexbox 개요

- 박스와 아이템들을 행 또는 열로 자유자재로 배치시켜준다.
- 기존 float 등의 방법에 비해 레이아웃을 구성하기 쉽다.
- Main axis : 주 축(가로)
- Cross axis : 교차 축(세로)
- FlexBox에는 container에 적용되는 속성이 있고 각각의 item에 적용되는 속성이 있다.
- Container : 아이템들을 감싸고 있는 박스
  - container에 적용되는 속성
  - display
  - flex-direction
  - flex-wrap
  - flex-flow
  - justify-content
  - align-items
  - align-content
- Item : 박스 안의 개별 아이템들
  - item에 적용되는 속성
  - order
  - flex-grow
  - flex-shrink
  - flex-basis
  - flex
  - align-self

<br><hr>

## 2. Container - display

- `<display-outside>` : 바깥에 적용되는 속성으로 inline, block
- `<display-inside>` : 내부 아이템에 적용되는 속성으로 flow grid, flex 가 있다.
- flexbox를 적용하기 위해서는 display에 flex를 입력해준다.

```
.container {
  display: flex;
}
```

<br><hr>

## 3. Container - flex-direction, flex-wrap, flex-flow

- `flex-direction` : 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향을 설정. row가 기본값이다.
  - row, row-reverse, column, column-reverse
- `flex-wrap` : 컨테이너 내 item 요소들이 한 줄에 배치되게 할지 여러행으로 나누어 표현 할 지 결정. nowrap이 기본값이다.
  - nowrap, wrap, wrap-reverse
- `flex-flow` : flex-direction, flex-wrap 속성의 단축 속성

```
.container {
  flex-direction: column;
  flex-wrap: wrap;
}

.container2 {
  flex-flow: column wrap;
}
```

<br><hr>

## 4. Container - justify-content, align-items, align-content

- `justify-content` : 주축을 기준으로 아이템을 어떻게 정렬할지 결정하는 속성.
  - start, center, space-between, space-around, space-evenly, flex-start, flex-end, left, right
- `align-items` : 교차 축을 기준으로 아이템을 어떻게 정렬할지 결정하는 속성.
  - stretch, start, center, end, flex-start, flex-end
- `align-content` : 아이템이 여러개의 줄일 경우 전체를 정렬하는 속성.
  - center, start, end, flex-start, flex-end, splace-between, space-around, space-evenly, stretch

<br><hr>

## 5. Item - order

- flex 내 아이템의 요소 배치 순서를 지정. 기본 정렬 순서는 오름차순이고 같은 값일 경우 소스 코드의 순서대로 정렬된다.
- 기본값은 0이며 음수 설정도 가능하다.
- order 속성을 사용하면 실제 DOM 순서와 화면에 보여지는 콘텐츠의 순서가 서로 연결되지 않으며 이는 스크린 리더 등 보조 기술을 사용하는 사용자의 경험에 부정적인 영향을 줄 수 있다.

<br><hr>

## 6. Item - flex-grow, flex-shrink, flex-basis, flex

- `flex-grow` : flex 컨테이너의 남는 공간을 아이템들에 할당하는 설정. 기본값은 `0`으로 남는 값을 주지 않는 다는 뜻이다. 0 이상의 숫자만 사용할 수 있으며 소수도 가능하다.
- `flex-shrink` : flex 컨테이너의 부족한 공간을 아이템들에 할당하는 설정(할당받으면 더 작아진다.). 기본값은 `1`으로 기본적으로 부족한 공간을 나누어준다. 0 이상의 숫자만 사용할 수 있으며 소수도 가능하다.
- `flex-basis` : 아이템의 초기 크기를 설정. 아무 값도 주지 않을 경우(auto) 아이템의 콘텐트 박스 크기로 설정된다. auto 값을 가지지 않은 flex-basis와 width(flex-direction: column인 경우 height) 값을 동시에 적용한 경우 flex-basis가 우선. 모든 아이템이 같은 크기를 가지게 하려면 0을 넣어주면 된다.
- `flex` : flex-grow, flex-shrink, flex-basis 를 한번에 작성. 한 개 또는 두 개의 단위 없는 숫자 값을 사용할 때, flex-basis의 값은 기본값인 auto가 아니라 0이 된다. (flex: 1, flex-grow: 1 의 결과가 다르다.). 균등하게 너비를 맞춰주는 flex:1 (flex: 1 1 0)을 주로 많이쓴다.

## 7. Item - align-self

- 아이템에 개별로 정렬을 적용할때 사용.
  - center, start, end, flex-start, flex-end, stretch

<br><hr>

참고 : https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/display  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex-flow  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/align-items  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/align-content  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/order  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex-shrink  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/flex  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
