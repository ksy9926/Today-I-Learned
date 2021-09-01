# DOM

> [1. DOM 소개](#1-dom-소개)
>
> [2. DOM 생성](#2-dom-생성)

<br><hr>

## 1. DOM 소개

- DOM(Document Object Model)이란 웹 페이지를 프로그래밍적으로 제어할 수 있게 해주는 객체 모델이다. DOM의 구조화된 표현을 통해 프로그래밍 언어가 DOM 구조에 접근을 할 수 있으며 문서 구조, 스타일, 내용 등을 변경할 수 있다.
- 보통 자바스크립트를 통해 DOM에 접근하며 html 문서의 구조를 바꾸거나 css 스타일을 변경시키거나 event를 발생시킨다.

<br><hr>

## 2. DOM 생성

- 브라우저가 HTML 문서를 전달받으면 브라우저는 고유의 렌더링 엔진을 통해 이를 parsing하게 되고 DOM 노드로 이루어진 트리를 만들게 된다. DOM은 최상위 인터페이스로 Node를 가지며 아래로 Document와 Element, Text, Comment 등을 가진다. 즉, 트리구조에는 엘리먼트 뿐만 아니라 텍스트와 주석 등도 포함이 되는 것이다.

참고 : https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction  
참고 : https://jbee.io/web/about-event-in-the-web/  
참고 : https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/frontend/bom-dom.md
