# 전역 속성

- 전역 특성(Global attributes)은 모든 HTML에서 공통으로 사용할 수 있는 특성입니다. 그러나 일부 요소에는 아무런 효과도 없을 수 있습니다.

> [1. class, id](#1-class-id)
>
> [2. style](#2-style)
>
> [3. title](#3-title)
>
> [4. lang](#4-lang)
>
> [5. data-](#5-data)
>
> [6. draggable](#6-draggable)
>
> [7. hidden](#7-hidden)

<br><hr>

## 1. class, id

- id 전역 특성은 문서 전체에서 유일한 고유식별자(ID)를 정의합니다. 고유식별자의 목적은 프래그먼트 식별자를 사용해 요소를 가리킬 때와 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함입니다.
- class 전역 특성은 공백으로 구분한 요소 클래스의 목록으로, 대소문자를 구분하지 않습니다. 클래스는 CSS나 JavaScript에서 클래스 선택자나 DOM 메서드의 document.getElementsByClassName() (en-US)과 같은 메서드를 통해 요소에 접근할 수 있는 방법입니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/id  
출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/class

<br><hr>

## 2. style

- style 전역 특성은 요소에 적용할 CSS 스타일 선언을 담습니다. 스타일은 별도의 파일에 정의하는 것이 권장된다는 점을 참고하세요. 이 특성과 `<style>` 요소는 주로 테스트 등 빠른 스타일링을 위한 목적으로 사용됩니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/style

<br><hr>

## 3. title

- title 전역 특성은 요소와 관련된 추가 정보를 제공하는 텍스트를 나타냅니다.
- 중간에 공백이나 개행이 있어도 인식이 된다.
- 요소가 title 특성을 가지고 있지 않을 땐 부모 요소로부터 상속합니다. 부모 요소 또한 자신의 부모로부터 상속할 수 있습니다.
- title에 빈 문자열을 지정한 경우 조상의 title이 더 이상 관련되지 않았으며 해당 요소에 툴팁을 표시하지 말아야 함을 나타냅니다.

예시

```
<div title="부모 요소">
  <div title="첫번
  째 요소">안녕하세요.</div>
  <div>반갑습니다.</div>
```

<div title="부모 요소">
  <div title="첫번
  째 요소">안녕하세요.</div>
  <div>반갑습니다.</div>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/title

<br><hr>

## 4. lang

- lang 전역 특성은 요소 내의 수정 불가한 텍스트의 언어와, 수정 가능한 텍스트가 사용해야 하는 언어를 정의합니다. 특성의 값은 Tags for Identifying Languages (BCP47)에 정의된 형식의 "언어 태그" 한 개입니다.
- 접근성 등의 측면에서 중요합니다. 예를 들어 같은 영어여도 lang에 따라서 발음이 다릅니다.

예시

```
<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>
```

<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/lang

<br><hr>

## 5. data-

- HTML5 특정 요소와 연관되어 있지만 확정된 의미는 갖지 않는 데이터에 대한 확장 가능성을 염두에 두고 디자인되었습니다. data-\* 속성은 표준이 아닌 속성이나 추가적인 DOM 속성, Node.setUserData()과 같은 다른 조작을 하지 않고도, 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.
- 문법은 간단합니다. 어느 엘리멘트에나 data-로 시작하는 속성은 무엇이든 사용할 수 있습니다. 화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있어요. 아래 data 사용법이 있습니다:

예시

```
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

- 자바스크립트에서 접근하기 : JavaScript 에서 이 속성 값들을 읽는 방법은 너무 간단합니다. 값을 읽기 위한 완전한 HTML 이름과 함께 getAttribute() 를 사용하면 됩니다. 그러나 표준은 더 간단한 방법을 정의합니다.: DOMStringMap (en-US) 는 dataset (en-US) 속성을 통해 읽어낼 수 있습니다.  
  dataset 객체를 통해 data 속성을 가져오기 위해서는 속성 이름의 data- 뒷 부분을 사용합니다.(대시들은 camelCase로 변환되는 것에 주의하세요.)

```
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

<br>

출처 : https://developer.mozilla.org/ko/docs/learn/HTML/Howto/Use_data_attributes

<br><hr>

## 6. draggable

- draggable 전역 특성은 요소의 드래그 가능 여부를 나타내는 열거형 특성으로, 네이티브 브라우저 동작 방식과 HTML Drag and Drop API 모두 통제합니다.
- true 또는 false 를 가집니다. 하지만 draggable 특성은 불리언이 아니고 열거형 특성이므로, true 또는 false의 지정 또한 필수입니다. 그러므로 `<img draggable>`처럼 사용할 수 없고, 올바른 사용법은 `<img draggable="false">`입니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable

<br><hr>

## 7. hidden

- hidden 전역 특성은 해당 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성입니다. 브라우저는 hidden 속성을 설정한 요소를 렌더링 하지 않습니다.
- hidden 특성을 가진 요소의 CSS display 속성 값을 변경하면 특성으로 인한 동작을 재정의합니다. 예컨대 `display: flex`를 지정한 요소는 hidden 특성이 존재하더라도 화면에 보이게 됩니다.

예시

```
<p>This content should be read right now, as it is important. I am so glad you are able to find it!</p>

<p hidden>This content is not relevant to this page right now, so should not be seen. Nothing to see here. Nada.</p>
```

<p>This content should be read right now, as it is important. I am so glad you are able to find it!</p>

<p hidden>This content is not relevant to this page right now, so should not be seen. Nothing to see here. Nada.</p>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden

<br><hr>
