# 구조를 나타내는 요소

> [1. 컨테이너(div, span)](#1-컨테이너div-span)
>
> [2. 시멘틱 웹이란](#2-시멘틱-웹이란)
>
> [3. header, footer](#3-header-footer)
>
> [4. nav](#4-nav)
>
> [5. aside](#5-aside)
>
> [6. main](#6-main)
>
> [7. article](#7-article)
>
> [8. section](#8-section)

<br><hr>

## 1. 컨테이너(div, span)

- HTML `<div>` 요소는 플로우 콘텐츠를 위한 통용 컨테이너입니다. CSS로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다.
- HTML `<span>` 요소는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다.
- `<div>`는 블록 레벨 요소인 반면 `<span>`은 인라인 요소입니다.

예시

```
<div style="background:blue">DIV</div>
<span style="background:red">SPAN</span>
```

<div style="background:blue">DIV</div>
<span style="background:red">SPAN</span>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/div

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/span

<br><hr>

## 2. 시멘틱 웹이란

- 요소의 의미를 고려하여, 구조를 설계하고 코드를 작성한다.
- 검색 엔진은 의미론적 마크업을 분석하여 페이지의 검색 랭킹에 영향을 줄 수있는 중요한 키워드로 간주합니다.
- 의미가 없는 끊임없는 div들을 탐색하는 것보다, 의미있는 코드 블록을 찾는 것이 훨씬 쉽습니다.
- 개발자에게 태그 안에 채워질 데이터 유형을 제안합니다.
- 의미있는 이름짓기(Semantic naming)는 적절한 사용자 정의 요소 / 구성 요소의 이름짓기(naming)를 반영합니다.

예시

```
<body>
  <header><!-- Header --></header>
  <nav><!-- 메뉴 --></nav>
  <main>
    <article><!-- 본문 --></article>
    <aside><!-- 사이드바 --></aside>
  </main>
  <footer><!-- Footer --></footer>
<body>
```

<br><hr>

## 3. header, footer

- HTML `<header>` 요소는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.
- HTML `<footer>` 요소는 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.

예시

```
<!-- 페이지 제목 -->
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>

<!-- 글 제목 -->
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
  <p><a href="https://janesmith.com/the-planet-earth/">Continue reading....</a></p>
</article>

<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
```

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/header

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer

<br><hr>

## 4. nav

- HTML `<nav>` 요소는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.

예시

```
<nav class="crumbs">
    <ol>
        <li class="crumb"><a href="#">Bikes</a></li>
        <li class="crumb"><a href="#">BMX</a></li>
        <li class="crumb">Jump Bike 3000</li>
    </ol>
</nav>
```

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav

<br><hr>

## 5. aside

- HTML `<aside>` 요소는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.

예시

```
<p>Salamanders are a group of amphibians with a lizard-like appearance.</p>

<aside style="float:right;width:40%">
    <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest.</p>
```

<p>Salamanders are a group of amphibians with a lizard-like appearance.</p>

<aside style="float:right;width:40%">
    <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest.</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside

<br><hr>

## 6. main

- HTML `<main>` 요소는 문서 `<body>`의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.
- `<main>` 요소의 콘텐츠는 문서의 유일한 내용이어야 합니다. 사이드바, 탐색 링크, 저작권 정보, 사이트 로고, 검색 폼 등 여러 문서에 걸쳐 반복되는 콘텐츠는 포함해선 안됩니다. 그러나 검색 폼이 페이지의 주요 기능이라면 예외로 둘 수 있습니다.
- exlorer에서는 지원이 되지 않으므로 role="main" 속성을 넣어주어야 한다.

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/main

<br><hr>

## 7. article

- HTML `<article>` 요소는 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다.
- 하나의 문서가 여러 개의 `<article>`을 가질 수 있습니다. 예컨대 사용자가 스크롤하면 계속해서 다음 글을 보여주는 블로그의 경우, 각각의 글이 `<article>` 요소가 되며, 그 안에는 또 여러 개의 `<section>`이 존재할 수 있습니다.
- 각각의 `<article>`을 식별할 수단이 필요합니다. 주로 제목(`<h1>`-`<h6>`) 요소를 `<article>`의 자식으로 포함하는 방법을 사용합니다.

예시 - 출처를 통해 볼 것.

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/article

<br><hr>

## 8. section

- HTML `<section>` 요소는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 `<section>`은 제목을 포함하지만, 항상 그런 것은 아닙니다.
- 각각의 `<section>`을 식별할 수단이 필요합니다. 주로 제목(`<h1>`-`<h6>`) 요소를 `<section>`의 자식으로 포함하는 방법을 사용합니다.

예시

```
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>

<section>
    <h2>Criteria</h2>
    <p>There are many different criteria to be considered when choosing an Apple — size, color, firmness, sweetness, tartness...</p>
</section>
```

<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>

<section>
    <h2>Criteria</h2>
    <p>There are many different criteria to be considered when choosing an Apple — size, color, firmness, sweetness, tartness...</p>
</section>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/section
