# CSS Introduction

> [1. CSS 소개](#1-css-소개)
>
> [2. CSS 적용 방법](#2-css-적용-방법)
>
> [3. 캐스캐이딩](#3-캐스캐이딩)
>
> [4. CSS 선언 순서](#4-css-선언-순서)

<br><hr>

## 1. CSS 소개

- CSS(Cascading Style Sheet)는 HTML이나 XML으로 작성된 문서를 꾸미기 위한 스타일 시트 언어로 Rule-based 언어이다.
- 선택자(Selector) : 스타일을 지정할 HTML 요소를 선택
- 선언 블록(declation block) : 중괄호 내부의 여러 선언들을 작성
- 선언(declations) : 프로퍼티와 값으로 이루어진 쌍
- 주석 : `/* 내용 */`의 형식

사용예시

```
선택자 {
  속성: 값;
  속성: 값;
}

h1 {
  color: red;
  font-size: 12px;
}

/* 한 줄 주석 */

/*
여러
줄
주석 가능
*/
```

<br><hr>

## 2. CSS 적용 방법

1. 내부 스타일(embedded)
2. 인라인 스타일(inline)
3. 외부 스타일(external)

사용예시

```
/* 내부 스타일 */
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>

/* 외부 스타일 */
<head>
  <link rel="stylesheet" href="style.css">
</head>

/* 인라인 스타일 */
<body>
  <h1 style="color:red; background:blue">CSS</h1>
</body>
```

<br>
<hr>

## 3. 캐스캐이딩

- tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일
- 뒤에 있으면 스타일을 덮어쓴다.
- 부모 요소에 있는 스타일 속성들은 자손에게도 적용이 되고, 자식 요소에서 재 정의할 경우, 부모의 스타일을 덮어쓴다.
- 상속이 되지 않는 속성도 있다.(ex. 배경 이미지, 배경 색 등)

## 4. CSS 선언 순서

- 네이버의 CSS 선언 순서를 참조한 순서입니다.
- 1~6 레이아웃, 7~8 테두리/배경, 9 글꼴, 10 동작, 11 기타
- display(표시)
- overflow(넘침)
- float(흐름)
- position(위치)
- width/height(크기)
- padding/margin(간격)
- border(테두리)
- background(배경)
- color/font(글꼴)
- animation
- 기타
