# 박스 모델

> [1. 박스 모델](#1-박스-모델)
>
> [2. width, height](#2-width-height)
>
> [3. margin](#3-margin)
>
> [4. padding](#4-padding)
>
> [5. border](#5-border)
>
> [6. box-sizing](#6-box-sizing)

<br><hr>

## 1. 박스 모델

- 문서의 레이아웃을 계산할 때 브라우저의 렌더링 엔진은 CSS 기본 박스 모델에 따라 각각의 요소를 사각형 박스로 표현한다. 하나의 박스는 네 부분으로 이루어진다.
- content : 콘텐츠가 표시되는 영역. 콘텐츠 영역의 크기는 콘텐츠 너비와 콘텐츠 높이이다.
- padding : 콘텐츠와 border 사이의 영역
- border : padding과 margin 사이의 테두리
- margin : 가장 바깥 쪽 레이어로 해당 박스와 다른 요소 사이의 공백 역할

<br><hr>

## 2. width, height

- `width` : 요소의 너비. 기본값은 컨텐츠 영역의 너비이지만, `box-sizing`이 `border-box`인 경우 테두리 영역의 너비이다.
- `height` : 요소의 높이. 기본값은 컨텐츠 영역의 높이이지만, `box-sizing`이 `border-box`인 경우 테두리 영역의 높이이다.
- `min-height`, `max-height`, `min-width`, `max-width`는 최소/최대 높이/너비를 설정하며 `width`와 `height`를 덮어쓴다.
- 자식에게 상속되지 않는다.

```
.container{
  width: 50%;
  height: 100px;
  min-width: 50px;
}
```

<br><hr>

## 3. margin

- 요소의 네 방향 바깥 여백 영역
- 4가지 값을 입력하면 차례대로 위, 오른쪽, 아래, 왼쪽 여백을 설정한다. 음수값도 입력 가능하다.
- auto : 브라우저가 적절한 여백 크기를 선택. 중앙 정렬할 때 사용할 수 있다.
- % 사용시 부모의 width의 퍼센트로 적용이 된다.
- 자식에게 상속되지 않는다.
- margin collapsing(마진 상쇄) : 여러 블록들의 위, 아래 margin이 겹칠 경우 가장 큰 크기를 가진 margin많이 적용된다.
  - 인접 형제 : 두 형제 요소의 위/아래 마진 상쇄
  - 부모 자식
    - 부모 블록에 border, padding, inline content가 없어서 부모와 자식의 margin-top 이 만나는 경우
    - 부모 블록에 border, padding, inline content가 없고 부모 자식을 분리할 height값이 지정되지 않아 부모와 자식의 margin-bottom이 만나는 경우
  - 빈 블록 : border, padding, content가 없고, height 또한 존재하지 않으면 해당 블록의 위아래 margin이 상쇄된다. 자주 나오는 경우는 아니다.

```
.container{
  margin: 10px 5px 5px 10px;
}

.center{
  margin: 10px auto;
}
```

<br><hr>

## 4. padding

- 요소의 네 방향 안쪽 여백
- 4가지 값을 입력하면 차례대로 위, 오른쪽, 아래, 왼쪽 padding을 설정한다.
- margin은 음수값이 가능하지만, padding은 음수값 사용 불가능하다.
- % 사용시 부모의 width의 퍼센트로 적용이 된다.

```
#parent {
  width: 300px;
  height: 300px;

  padding: 30px;

  background-color: skyblue;
}

#child {
  width: 50px;
  height: 5px;

  background-color: red
}
```

<br><hr>

## 5. border

- 요소의 테두리를 설정. 차례대로 `border-width`, `border-style`, `border-color`을 설정한다.
- `border-style` : dotted, inset, dashed, solid, double 등이 있다.
- `border-width` : 테두리의 굵기를 설정
- `border-color` : 테두리의 색상을 설정
- `border-radius` : 테두리의 경계의 꼭짓점을 둥글게 만든다. 50%일때 정확하게 원이 된다.

```
.box {
  width: 100px;
  height: 100px;

  border: 1px solid red;
  border-radius: 15px;
}
}
```

<br><hr>

## 6. box-sizing

- 요소의 높이와 너비를 계산하는 방법을 지정.
- `content-box` : 기본 설정으로 콘텐츠 영역의 크기만큼 높이와 너비가 지정
- `border-box` : border와 padding의 크기도 요소의 크기로 고려

```
.container {
  box-sizing: border-box;
  width: 100%;
  border: solid #5B6DCD 10px;
  padding: 5px;
}

```

<br><hr>

출처 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/width  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/height  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/margin  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/padding  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/border  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/border-radius  
출처 : https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing
