# BEM

> [1. BEM이란?](#1-BEM이란)
>
> [2. Block](#2-block)
>
> [3. Element](#3-element)
>
> [4. Modifier](#4-modifier)

<br><hr>

## 1. BEM이란?

- CSS 방법론 중의 하나이며 BEM은 Block, Element, Modifier를 뜻한다. 이 세가지로 구성된 이름을 짓는 방법론이며 `__`와 `--`로 구분을 한다.
- 기본적으로 ID를 사용하지 않으며 class만을 사용한다.
- '어떻게 보이는가'가 아니라 '어떤 목적인가'에 따라 이름을 짓는다. 예를 들어, 에러 메시지를 띄우는 p 태그에는 `.red`가 아닌 `.error`라는 이름을 짓는다. 이름을 연결할 때는 Camel Case가 아닌 `block-name` 과 같이 하이픈 하나만 써서 연결한다.

```
.header__navigation--navi-text {
  color: red;
}
```

- 위 코드에서 `header`는 Block, `navigation`은 Element, `navi-text`는 Modifier가 된다.

<br><hr>

## 2. Block

- 블럭은 재사용 가능한 기능적으로 독립적인 페이지 컴포넌트를 블럭이라고 부른다. 즉 해당 부분만 떼어 다른곳에 쓸 수 있는 단위를 말한다. 예를 들어 로그인에 사용되는 로그인 블럭이 있다면 해당 블럭은 다른 곳에서도 사용이 가능하기 때문에 블럭이 된다. 메뉴 블럭, 로고 블럭, 서치 블럭 등도 마찬가지이다.
- 블럭은 블럭을 감쌀 수 있다. `.header > .logo`는 header라는 블럭 안에 logo라는 블럭이 들어간 형태이다.

## 3. Element

- 엘리먼트는 블럭을 구성하는 단위이다. 블럭이 독립적으로 재사용 가능하다면 엘리먼트는 의존적인 형태이다. 자신이 속한 블럭 내에서만 의미를 가진다.

```
<form class="search-form">
  <input class="search-form__input" />
  <button class="search-form__button">Search</button>
</form>
```

- 위 예시에서 `.search-form`은 블럭, `search-form__input`, `search-form__button`은 엘리먼트이다.
- 엘리먼트 또한 중첩이 가능하다. `.block > .block__element1 > .block__element2` 도 가능하다는 뜻이다. 하지만 BEM에서 `.block_element2`를 `.block_element1`의 하위 엘리먼트로 보지 않고 둘 다 똑같이 `.block`의 엘리먼트로 취급한다. 따라서 다음과 같이 사용할 수 있다.

```
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__input"/>
    <button class="search-form__button">Search</button>
  </div>
</form>
```

<br><hr>

## 4. Modifier

- 모디파이어는 블럭이나 엘리먼트의 속성을 담당한다. 생긴게 조금 다르거나, 다르게 동작하는 블럭이나 엘리먼트를 만들 때 사용하면 된다.
  - 불리언(boolean) 타입 : true인 경우에 적용되는 클래스 (ex. --focused)
  - 키-밸류(key-value) 타입 : 성질-내용을 작성

```
/* 불리언 타입 */
/* 아래 코드에서 --focused가 수식어에 해당 */

<ul class="tab">
  <li class="tab__item tab__item--focused">탭 01</li>
  <li class="tab__item">탭 02</li>
  <li class="tab__item">탭 03</li>
</ul>

/* 키-밸류 타입 */
/* 아래 코드에서 --color-gray, --theme-normal, --theme-special이 키-밸류 타입에 해당

<div class="column">
  <strong class="title">일반 로그인</strong>
  <form class="form-login form-login--theme-normal">
    <input type="text" class="form-login__id"/>
    <input type="password" class="form-login__password"/>
  </form>
</div>
<div class="column">
  <strong class="title title--color-gray">VIP 로그인 (준비중)</strong>
  <form class="form-login form-login--theme-special form-login--disabled">
    <input type="text" class="form-login__id"/>
    <input type="password" class="form-login__password"/>
  </form>
</div>
```

참고 : https://blog.sonim1.com/221  
참고 : https://nykim.work/15
