# 목록과 표

> [1. 목록 - ul, ol, li](#1-목록---ul-ol-li)
>
> [2. 정의 목록 - dl, dt, dd](#2-정의-목록---dl-dt-dd)
>
> [3. 표 - table, tr, th, td](#3-표---table-tr-th-td)
>
> [4. thead, tbody, tfoot](#4-thead-tbody-tfoot)
>
> [5. caption](#5-caption)

<br><hr>

## 1. 목록 - ul, ol, li

- HTML `<ul>` 요소는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다
- HTML `<ol>` 요소는 정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다.
  - 속성 type
    - 'a'는 소문자 알파벳,
    - 'A'는 대문자 알파벳,
    - 'i'는 소문자 로마 숫자,
    - 'I'는 대문자 로마 숫자,
    - '1' 는 숫자(기본값)을 나타냅니다.
  - 속성 start : 항목을 셀 때 시작할 수. type이 로마 숫자나 영어 문자인 경우에도 아라비아 숫자로 나타낸 정수(1, 2, 3...)만 가능합니다.
- HTML `<li>` 요소는 목록의 항목을 나타냅니다. 반드시 정렬 목록(`<ol>`), 비정렬 목록(`<ul>`, 혹은 메뉴(`<menu>`) 안에 위치해야 합니다. 메뉴와 비정렬 목록에서는 보통 불릿(•)으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타냅니다.

예시

```
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/li

<br><hr>

## 2. 정의 목록 - dl, dt, dd

- HTML `<dl>` 요소는 설명 목록을 나타냅니다. `<dl>`은 `<dt>`로 표기한 용어와 `<dd>` 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.
- HTML `<dt>` 요소는 설명 혹은 정의 리스트에서 용어를 나타냅니다. `<dl>` 요소 안에 위치해야 합니다. 보통 `<dd>` 요소가 뒤따르지만, 여러 개의 `<dt>` 요소를 연속해 배치하면 바로 다음 `<dd>` 요소로 한꺼번에 서술할 수 있습니다.
- HTML `<dd>` 요소는 정의 목록 요소(`<dl>`)에서 앞선 용어(`<dt>`)에 대한 설명, 정의, 또는 값을 제공합니다.

예시

```
<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>

    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>

    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>
```

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>
    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/dt

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/dd

<br><hr>

## 3. 표 - table, tr, th, td

- HTML `<table>` 요소는 행과 열로 이루어진 표를 나타냅니다.
- `<tr>` 은 행, `<th>`는 열의 제목, `<td>`는 열을 나타낸다.

예시

```
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/table

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/tr

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/th

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/td

<br><hr>

## 4. thead, tbody, tfoot

- `<thead>` 요소는 테이블 태그의 제목행을 나타냅니다.
- `<tbody>` 요소는 테이블 여러행을 묶어서 본문을 나타냅니다.
- `<tfoot>` 요소는 테이블 태그의 마지막 정리행을 나타냅니다.

예시

```
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/thead

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/tbody

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/tfoott

<br><hr>

## 5. caption

- HTML `<caption>` 요소는 표의 설명 또는 제목을 나타냅니다.
- `<table>` 요소의 첫 번째 자식이어야 합니다.

예시

```
<table>
    <caption>He-Man and Skeletor facts</caption>
    <tr>
        <td> </td>
        <th scope="col" class="heman">He-Man</th>
        <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
        <th scope="row">Role</th>
        <td>Hero</td>
        <td>Villain</td>
    </tr>
    <tr>
        <th scope="row">Weapon</th>
        <td>Power Sword</td>
        <td>Havoc Staff</td>
    </tr>
    <tr>
        <th scope="row">Dark secret</th>
        <td>Expert florist</td>
        <td>Cries at romcoms</td>
    </tr>
</table>
```

<table>
    <caption>He-Man and Skeletor facts</caption>
    <tr>
        <td> </td>
        <th scope="col" class="heman">He-Man</th>
        <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
        <th scope="row">Role</th>
        <td>Hero</td>
        <td>Villain</td>
    </tr>
    <tr>
        <th scope="row">Weapon</th>
        <td>Power Sword</td>
        <td>Havoc Staff</td>
    </tr>
    <tr>
        <th scope="row">Dark secret</th>
        <td>Expert florist</td>
        <td>Cries at romcoms</td>
    </tr>
</table>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption
