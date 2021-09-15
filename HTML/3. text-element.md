# 텍스트 요소

> [1. 제목 - h1 ~ h6](#1-제목---h1--h6)
>
> [2. 본문 - p](#2-본문---p)
>
> [3. 본문 - br](#3-본문---br)
>
> [4. 본문 - blockquote, q](#4-본문---blockquote-q)
>
> [5. 본문 - pre](#5-본문---pre)
>
> [6. 본문 - figure, figcaption](#6-본문---figure-figcaption)
>
> [7. 본문 - hr](#7-본문---hr)
>
> [8. 본문 - abbr, address, cite, bdo](#8-본문---abbr-address-cite-bdo)
>
> [9. 포매팅 - b, strong](#9-포매팅---b-strong)
>
> [10. 포매팅 - i, em](#10-포매팅---i-em)
>
> [11. 포매팅 - mark, small, sub, sup](#11-포매팅---mark-small-sub-sup)
>
> [12. 포매팅 - del, ins, code, kbd](#12-포매팅---del-ins-code-kbd)
>
> [13. a태그와 하이퍼링크1](#13-a태그와-하이퍼링크)
>
> [14. 엔티티(Entity)](#14-엔티티entity)

<br><hr>

## 1. 제목 - h1 ~ h6

- HTML `<h1>` ~ `<h6>` 요소는 6단계의 구획 제목을 나타냅니다. 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다.
- 사용자 에이전트가 제목의 정보(h1~h6)를 사용해 자동으로 문서 콘텐츠의 표(목차)를 만드는 등의 작업을 수행할 수 있습니다.
- 글씨 크기를 위해 제목 태그를 사용하지 마세요. 대신 CSS의 `font-size` 속성을 사용하세요.
- 제목 단계를 건너뛰는 것을 피하세요. 언제나 `<h1>`로 시작해서, `<h1>`, 순차적으로 기입하세요.
- 페이지 당 하나의 `<h1>`만 사용하세요. `<h1>`은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것입니다. 또한 스크린리더 사용자와 [SEO](https://developer.mozilla.org/ko/docs/Glossary/SEO)에도 더 적합합니다.

#### 예시

```
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>
```

<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements

<br><hr>

## 2. 본문 - p

- HTML `<p>` 요소는 하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다.
- 문단은 **블록 레벨 요소**이며 자신의 닫는 태그(`</p>`) 이전에 다른 블록 레벨 태그가 분석되면 자동으로 닫힙니다.

#### 예시

```
<p>첫 번째 문단입니다.</p>
<p>두 번째 문단입니다.</p>
```

<p>첫 번째 문단입니다.</p>
<p>두 번째 문단입니다.</p>
<hr>
출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/p

<br><hr>

## 3. 본문 - br

- HTML `<br>` 요소는 텍스트 안에 **줄바꿈**(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.
- 문단 사이에 여백을 두기 위한 용도로 `<br>`을 사용하지 마세요. 대신 `<p>` 요소로 감싼 후 CSS의 margin 속성으로 여백의 크기를 조절하세요.
- 문단 구분을 `<br>`로 하는건 나쁜 사례일 뿐만 아니라 스크린 리더를 사용해 탐색하는 사용자에게도 문제가 됩니다. 스크린 리더가 요소의 존재는 알려주겠지만, `<br>`에는 아무런 내용도 없기 때문입니다. 따라서 사용자는 내용이 어딨는지 몰라 혼란을 느낄 수 있습니다.

#### 예시

```
<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou<br>
</p>
```

<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou
</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/br

<br><hr>

## 4. 본문 - blockquote, q

- HTML `<blockquote>` 요소는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 주로 들여쓰기를 한 것으로 그려집니다. 인용문의 출처 URL은 cite 특성으로, 출처 텍스트는 `<cite>` 요소로 제공할 수 있습니다. 출처 URL은 브라우저만 알 수 있고 표시가 되지는 않습니다.
- HTML `<q>`요소는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 " "를 붙여 표현합니다. `<q>`는 줄 바꿈이 없는 짧은 경우에 적합합니다. 긴 인용문은 `<blockquote>` 요소를 사용하세요.
- `<blockquote>` 요소는 **블록** 레벨, `<q>` 요소는 **인라인** 레벨이다.

예시

```
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>
<p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>

```

<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>

<p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/q

<br><hr>

## 5. 본문 - pre

- HTML `<pre>` 요소는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다. (preformatted)
- 고정폭 글꼴은 글자들의 가로폭에 상관없이 일정한 폭을 가지는 것을 말한다. 예를 들어 AAA와 III의 경우 I가 가로가 더 좁지만 `<pre>` 요소를 쓸 경우 둘 모두 폭이 같게 된다.

예시

```
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/pre

<br><hr>

## 6. 본문 - figure, figcaption

- HTML `<figure>` 요소는 독립적인 콘텐츠를 표현합니다. `<figcaption>` 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.
- 가능한 콘텐츠로 `<figcaption>`과 뒤따르는 플로우 콘텐츠, 혹은 플로우 콘텐츠를 뒤따르는 `<figcaption>`, 혹은 플로우 콘텐츠가 있다.

예시

```
<figure>
    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```

<figure>
    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure

<br><hr>

## 7. 본문 - hr

- HTML `<hr>` 요소는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다.
- 빈 요소 이므로 `<hr>` 또는 `<hr />` 로 사용

예시

```
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr>

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr>

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr

<br><hr>

## 8. 본문 - abbr, address, cite, bdo

- HTML `<abbr>` 요소는 준말 또는 머리글자를 나타냅니다. 선택 속성인 title을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. title 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다. (abbreviation - 약어)

예시

```
<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```

<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>

- HTML `<address>` 요소는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다.

예시

```
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>

```

<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>

- HTML `<cite>` 요소는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.

예시

```
<figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
</figure>
```

<figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
</figure>

- HTML `<bdo>` 요소는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다.

예시

```
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다</bdo></p>
```

<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다</bdo></p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/address

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite

<br><hr>

## 9. 포매팅 - b, strong

- HTML `<b>` 요소는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다. 원래는 "굵은 글씨 요소"로 불렸으며, 대부분의 브라우저도 여전히 텍스트를 굵은 글씨체로 강조합니다. 그러나 `<b>`를 사용해 텍스트를 꾸미면 안됩니다. 대신 CSS font-weight를 사용해 굵은 글씨체를 적용하거나, `<strong>` 요소를 사용해 특별히 중요한 텍스트를 나타내세요.
- HTML `<strong>` 요소는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다.

예시

```
<p>작업을 하기전에 <strong>고글을 반드시 착용하세요.</strong>.</p>
<p>이 안경은 <b>가격</b>이 싸고 <b>내구성</b>이 좋아요.</p>
```

<p>작업을 하기전에 <strong>고글을 반드시 착용하세요.</strong>.</p>
<p>이 안경은 <b>가격</b>이 싸고 <b>내구성</b>이 좋아요.</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/b

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong

<br><hr>

## 10. 포매팅 - i, em

- HTML `<i>` 요소는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다.
- HTML `<em>` 요소는 텍스트의 강세를 나타냅니다. `<em>` 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다.

예시

```
<p>I looked at it and thought <i>This can't be real!</i></p>
<p>We <em>had</em> to do something about it.</p>
```

<p>I looked at it and thought <i>This can't be real!</i></p>
<p>We <em>had</em> to do something about it.</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/i

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/em

<br><hr>

## 11. 포매팅 - mark, small, sub, sup

- HTML `<mark>` 요소는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.
- HTML `<small>` 요소는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다. 기본 상태에서 `<small>`은 자신의 콘텐츠를 한 사이즈 작은 글꼴(small에서 x-small 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없습니다.
- HTML `<sub>` 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 합니다.
- HTML `<sup>` 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다. 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 합니다.

예시

```
<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>

<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>

<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>

<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
```

<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>

<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>

<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>

<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/mark

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/small

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup

<br><hr>

## 12. 포매팅 - del, ins, code, kbd

- HTML `<del>` 요소는 문서에서 제거된 텍스트의 범위를 나타냅니다. 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. `<ins>` 요소를 추가된 텍스트의 범위를 나타낼 수 있습니다.
  - 속성 cite : 회의록, 이슈 추적 시스템의 티켓 번호 등 변경점을 설명하는 리소스의 URI.
  - 속성 datetime: 변경이 발생한 일시. 유효한 날짜 문자열이어야 하며, 시간을 지정할 경우 역시 유효해야 합니다. 유효하지 않은 값을 지정할 경우 일시를 지정하지 않은 것과 같습니다.
- HTML `<code>` 요소는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다. 기본 스타일은 사용자 에이전트의 고정폭 글씨체입니다. 여러 줄의 코드를 나타내려면 `<code>` 요소를 `<pre>`로 감싸세요. 보통 상황에서 `<code>`는 코드 한 줄만 나타냅니다.
- HTML `<kbd>` 요소는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다. 관례에 따라 사용자 에이전트의 고정폭 글꼴로 표시하지만, HTML 표준은 그런 점을 강제하지 않습니다.

예시

```
<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>

<p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>

<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```

<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins cite="../howtobeawizard.html" datetime="2018-05">running it</ins> makes it so.
</blockquote>

<p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>

<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/del

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/code

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd

<br><hr>

## 13. a태그와 하이퍼링크

- HTML `<a>` 요소(앵커 요소)는 href 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. `<a>` 안의 콘텐츠는 링크 목적지의 설명을 나타내야 합니다.
  - 속성 href : 하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있습니다.
    - tel : URL을 사용하는 전화번호
    - mailto : URL을 사용하는 이메일 주소
  - 속성 target : 링크한 URL을 표시할 위치
    - \_blank : URL을 새로운 브라우징 맥락에 표시합니다
    - target을 사용할 때, rel="noreferrer"를 추가해 window.opener API의 악의적인 사용을 방지하는걸 고려하세요.

예시

```
<ul>
  <li><a href="https://example.com" target="_blank">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/a

<br><hr>

## 14. 엔티티(Entity)

- HTML에서 문자 <,>, "및 &는 특수 문자입니다(예약어). 이들은 HTML 구문 자체의 일부입니다. 그럼 어떻게 이러한 특수 문자 중 하나를 내가 사용하고 싶은 텍스트에 포함할까요? 예를 들어, 앰퍼샌드 또는 이하 기호를 텍스트에 사용하고 HTML 코드로 해석되지 않게 하려는 경우와 같이 말입니다.
- 다른 entity를 보고 싶으면 google에 w3c entity 라고 검색하면 된다.

| Literal character | Character reference equivalent |
| ----------------- | ------------------------------ |
| <                 | `&lt;`                         |
| >                 | `&gt;`                         |
| "                 | `&quot;`                       |
| '                 | `&apos;`                       |
| &                 | `&amp;`                        |
| 공백              | `&nbsp;`                       |

예시

```
<p>문단을 나타낼때 <p></p> 태그를 사용합니다</p>
<p>문단을 나타낼때 &lt;p&gt;&lt;/p&gt; 태그를 사용합니다</p>
```

<p>문단을 나타낼때 <p></p> 태그를 사용합니다</p>
<p>문단을 나타낼때 &lt;p&gt;&lt;/p&gt; 태그를 사용합니다</p>

출처 : https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started
