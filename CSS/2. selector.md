# CSS 선택자

> [1. 선택자](#1-선택자)
>
> [2. 속성 선택자](#2-속성-선택자)
>
> [3. 가상클래스 선택자(:nth-child())](#3-가상클래스-선택자nth-child)
>
> [4. 가상클래스 선택자(:nth-of-type())](#4-가상클래스-선택자nth-of-type)
>
> [5. 가상클래스 선택자(:not())](#5-가상클래스-선택자not)
>
> [6. 가상클래스 선택자(:link, :visited)](#6-가상클래스-선택자link-visited)
>
> [7. 가상클래스 선택자(:hover, :active, :focus)](#7-가상클래스-선택자hover-active-focus)
>
> [8. 가상클래스 선택자(:enabled, :disabled, :checked)](#8-가상클래스-선택자enabled-disabled-checked)
>
> [9. 가상요소 선택자(::before, ::after)](#9-가상요소-선택자before-after)
>
> [10. 가상요소 선택자(::first-letter, ::first-line, ::selection)](#10-가상요소-선택자first-letter-first-line-selection)
>
> [11. 선택자 결합](#11-선택자-결합)
>
> [12. 범용 선택자](#12-범용-선택자)
>
> [13. 상속 제어하기](#13-상속-제어하기)
>
> [14. 우선순위](#14-우선순위)

<br><hr>

## 1. 선택자

- 선택자 : 스타일을 적용할 html 요소를 대상으로 하는데 사용가능하다.

- type 선택자(tag 선택자) : html 태그 요소를 선택
- class 선택자 : 해당 클래스 명을 가진 요소를 선택
- id 선택자 : 해당 id 명을 가진 요소를 선택. id 선택자는 동일한 선택자를 가질 수 없다.

```
/* Type Selector */
h1 {
  color: red;
  font-size: 12px;
}

/* Class Selector */
.blue {
  color: blue
}

/* Id Selector */
#welcome-title {
  color: red;
}
```

<br><hr>

## 2. 속성 선택자

- Attribute Selector : 해당 속성을 가진 태그만 대상으로 하는 선택자

```
/* Attribute Selector */

/* 1. [attr] */
a[target] {
  color: hotpink;
}

/* 2. [attr=value] */
a[href="https://example.org"]{
  color: indigo;
}

input[type="submit"]{
  background-color: green;
}

/* 3. [attr^=value] */
/* ^ 는 뒤에 있는 값으로 시작하는 속성만 고른다. */
a[href^="http://"] {
  color: red;
}

/* 4. [attr$=value] */
/* $ 는 뒤에 있는 값으로 끝나는 속성만 고른다.
a[href$=".com"]{
  color: silver;
}

/* 5. [attr*=value] */
/* * 는 뒤에 있는 값이 적어도 하나 이상 있는 속성만 고른다. */
a[href*="example"]{
  color: sienna;
}
```

<br>
<hr>

## 3. 가상클래스 선택자(nth-child())

```
<ul>
  <li>Toy Story</li>
  <li class="movie">Lion King</li>
  <li class="movie">Coco</li>
  <li class="movie">Titanic</li>
  <li class="movie">Transformer</li>
</ul>
```

```
/* Pseudo-Class Selector */

/* 1. :first-child */
li:first-child {
  color: green;
}

/* 주의할 점! */
/*
first-child는 해당 요소들을 가진 부모의 첫 번째 자식에게 적용된다.
그러므로 아래의 예제는 적용되지 않는다.
*/
.movie:first-child{
  color: yellow;
}


/* 2. :last-child */
li:last-child {
  color: red;
}

/* 3. :nth-child(n) */
li:nth-child(3) {
  color: silver;
}

/* 짝수만 적용시키기 */
li:nth-child(2n){
  color: yellow;
}

li:nth-child(even){
  color: gold;
}

```

<br><hr>

## 4. 가상클래스 선택자(:nth-of-type())

```
<section>
  <div class="movie">토이 스토리</div>
  <p class="movie">주토피아</p>
  <p class="movie">인사이드아웃</p>
  <p class="movie">니모를 찾아서</p>
  <div class="movie">코코</div>
</section>
```

```
/* 1. :first-of-type */
p:first-of-type {
  color: red;
}

/* 주의할 점! */
/*
해당 타입을 가진 요소의 첫 번째에 모두 적용된다.
아래 코드의 경우 토이스토리와 주토피아 둘 모두에게 적용이 된다.
*/
.movie:first-of-type {
  color: lightblue;
}

/* 2. :last-of-type */
p:last-of-type {
  color: blue;
}

/* 3. :nth-of-type(n) */
p:nth-of-type(2) {
  color: purple;
}
```

<br><hr>

## 5. 가상클래스 선택자(:not())

- 괄호 안에 들어가는 선택자를 제외한 선택자

```
/* :not() */
input:not([type="password"]){
  background: blue;
}

input:not(.email){
  background: yellow;
}
```

## 6. 가상클래스 선택자(:link, :visited)

- `:link` : 유저가 해당 웹사이트를 방문한 적이 없을 때
- `:visited` : 유저가 해당 웹사이트를 방문한 적이 있을 때

```
a:link {
  color: tomato;
}

a:visited {
  color: yellowgreen;
}
```

<br><hr>

## 7. 가상클래스 선택자(:hover, :active, :focus)

- `:hover` : 마우스를 올렸을 때
- `:active` : 마우스를 누르고 때기 전까지
- `:focus` : tab 키를 눌러 해당 요소를 포커싱을 했을 때
- 이들은 뒤에 있는 가상클래스 선택자의 종류에 따라 덮어쓰게 된다. 그러므로 LVHA 순서(`:link` - `:visited` - `:hover` - `:active`)를 따라 작성하는 것을 권고한다.

```
button:hover {
  background-color: teal;
}

button:active {
  background-color: red;
}

button:focus {
  background-color: blue;
}
```

## 8. 가상클래스 선택자(:enabled, :disabled, :checked)

```
<input type="text">
<input type="text" disabled>

<input type="radio" name="yes" id="yes">
<input type="radio" name="no" id="no">
```

```
input[type="text"]:enabled {
  background-color: skyblue;
}

input[type="text"]:disabled {
  background-color: indigo;
}

input[type="radio"]:checked {
  background-color: pink;
}
```

## 9. 가상요소 선택자(::before, ::after)

```
<ul>
  <li class="movie>Toy Story</li>
  <li class="movie favorite">Lion King</li>
  <li class="movie">Coco</li>
  <li class="movie">Titanic</li>
  <li class="movie">Transformer</li>
</ul>
```

```
.favorite::before {
  content: '❤';
}
```

<br><hr>

## 10. 가상요소 선택자(::first-letter, ::first-line, ::selection)

- `::first-letter` : 첫 번째 글자에만 스타일 적용
- `::first-line` : 첫 번째 줄에만 스타일 적용
- `::selection` : 선택 영역에 스타일 적용(드래그한 곳)

```
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
```

```
p::first-letter {
  color: red;
}

p::first-line {
  background-color: yellow;
}

p::selection {
  background-color: green;
}
```

<br><hr>

## 11. 선택자 결합

- 하위 선택자 결합(` `) : 모든 자식들에 적용
- 자식 선택자 결합(`>`) : 바로 밑의 자식 하나에게만 적용
- 일반 형제 선택자 결합(`~`) : 형제 중에서 자신보다 뒤에 있는 형제에게만 적용
- 인접 형제 선택자 결합(`+`) : 인접한 요소만 선택(형제 중 위아래로 하나씩만)
- 그룹화(`,`) : 여러 개의 요소에 동일한 스타일을 적용.

```
/* 하위 선택자 결합 */
ol li {
  color: blue
}

/* 자식 선택자 결합 */
ol > li {
  color: red
}

/* 일반 형제 선택자 결합 */
li ~ div {
  color: yellow;
}

/* 인접 형제 선택자 결합 */
li + div {
  color: gold;
}

/* 그룹화 */
span, p, button {
  background-color: green;
}
```

<br><hr>

## 12. 범용 선택자

```
/* 모든 요소 선택. 최상단에 보통 적음 */
* {
  color: red
}

/* ex. div의 자식 모두 선택 */
div > * {
  color: blue;
}
```

## 13. 상속 제어하기

- `initial` : 상속을 끊음.
- `inherit` : 상속을 받음.
- `unset` : 상속받을 값이 있을 경우 inherit, 상속받을 값이 없을 경우 initial

```
.child {
  color: initial;
  font-size: initial;
  background: initial;
  border: initial;
}

/* 한번에 상속 끊기. 상속 받을 속성만 지정 */
.movie {
  all: initial;
  color: inherit;
}

.music {
  all: unset;
}
```

<br><hr>

## 14. 우선순위

- !important > 인라인 > id > class, attribute, pseudo class > type > \* > inherit

```
.first {
  color: red;
}

div {
  color: purple !important;
}
```
