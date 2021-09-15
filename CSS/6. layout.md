# 레이아웃

> [1. display](#1-display)
>
> [2. float](#2-float)
>
> [3. position](#3-position)
>
> [4. overflow](#4-overflow)
>
> [5. z-index](#5-z-index)

<br><hr>

## 1. display

- 요소를 블록과 인라인 요소 중 어느 쪽으로 처리할지를 정하며, flow, grid, flex 처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정한다.
- `inline` : 영역의 크기가 내부 콘텐츠 크기로 정해진다. 여러 요소가 가로 배치가 된다.
- `block` : 영역의 크기를 width, height로 지정할 수 있다. width를 지정하지 않으면 가로 전체를 차지한다. 여러 요소가 세로 배치가 된다.
- `inline-block` : 영역의 크기를 width, height로 지정할 수 있다. 여러 요소가 가로 배치가 된다. margin, padding 등도 설정할 수 있다.
- `none` : 해당 요소를 없앤다.
  - `visibility: hidden`과의 차이점 : 요소 자체를 없애기 때문에 박스도 사라지게 된다. `visibility: hidden`의 경우 내용만 사라지고 레이아웃은 남아있다.

```
span {
  display: inline-block;
  width: 100px;
  height: 50px;

  background-color: blue;
}
```

<br><hr>

## 2. float

- 한 요소가 normal flow에서 벗어나 텍스트나 인라인 요소가 자신의 좌우에 배치되도록 만든다.

```
.image {
  float: left;

  width: 100px;
  height: 100px;
  background-color: blue;
}
```

<br><hr>

## 3. position

- 문서 상에 요소를 배치하는 방법을 지정
- `static` : 기본값. 일반적인 흐름에 따라 배치. top, right, bottom, left, z-index 속성이 영향을 주지 않는다.
- `relative` : 요소를 일반적인 흐름에 따라 배치하며 자신을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용
- `absolute` : 요소를 일반적인 흐름에서 제거하고 static이 아닌 부모를 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용
- `fixed` : 요소를 일반적인 흐름에서 제거하고 뷰포트의 초기 컨테이닝 블록을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용
- `sticky` : 요소를 일반적인 흐름에 따라 배치하며 가장 가까운 스크롤 되는 조상을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용. 특정 위치를 지나면 해당 자리에 고정이 된다.

<br><hr>

## 4. overflow

- 요소의 콘텐츠가 너무 커서 블록을 초과할 경우 처리하는 방법
- 효력을 갖기 위해서는 블록 레벨 컨테이너의 `height`를 설정하거나 `white-space`를 `nowrap`으로 설정해야 한다.
- 두 개를 사용한 경우 첫번째 값은 overflow-x, 두 번째 값은 overflow-y를 지정한다.
- `visible` : 기본값. 넘쳐나는 만큼 그대로 표시한다.
- `hidden` : 넘쳐나는 부분을 숨김.
- `scroll` : 해당 블록 내에서 스크롤이 되도록 변경
- `auto` : 넘치면 scroll로, 넘치지 않으면 visible로 자동 조절.

<br><hr>

## 5. z-index

- 3차원으로 보았을때 z축의 순서를 지정. 음수값도 가능하다.
- position이 static이 아닌 요소간의 순서를 지정한다.

<br><hr>

출처 : https://developer.mozilla.org/ko/docs/Web/CSS/display  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/visibility  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/float  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/position  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/overflow  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/z-index
