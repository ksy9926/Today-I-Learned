# 메타데이터 요소

> [1. 메타데이터의 역할](#1-메타데이터의-역할)
>
> [2. title](#2-title)
>
> [3. meta](#3-meta)
>
> [4. link](#4-link)
>
> [5. MIME 타입](#5-mime-타입)
>
> [6. style](#6-style)
>
> [7. script](#7-script)

<br><hr>

## 1. 메타데이터의 역할

- 메타데이터의 가장 단순한 정의는 데이터를 설명하는 데이터입니다. 예를 들어 HTML은 데이터입니다. 그리고 HTML의 `<head>` 안에는 문서 작성자나 문서 요약과 같이 문서를 설명하는 데이터, 즉 메타데이터를 넣을 수 있습니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Glossary/Metadata

<br><hr>

## 2. title

- HTML `<title>` 요소는 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의합니다. 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시합니다. 하나의 HTML에 하나의 `<title>` 요소만 들어갑니다.
- 페이지 제목은 SEO에 큰 영향을 줍니다. 보통, 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 내곤 합니다. 검색 엔진 (en-US)이 결과 페이지의 순서를 결정하는 구성 요소 중 하나가 페이지 제목의 내용이기 때문입니다. 또한, 검색 결과에서 잠재적 독자의 주목을 끌 수 있는 최초 "훅"이 바로 제목입니다. 다음은 좋은 제목을 작성할 때 참고할 수 있는 몇 가지 지침입니다.
  - 하나 혹은 두 개의 단어로만 제목을 구성하는걸 피하세요. 콘텐츠를 설명하는 문장을 넣거나, 사전과 참고 문서의 경우 용어와 정의를 짝지어 사용하세요.
  - 검색 결과는 보통 페이지 제목의 첫 55~60글자만 노출합니다. 이후 텍스트는 보이지 않을 수도 있으므로 글자 수를 제한하세요. 긴 제목을 반드시 사용해야 하는 경우, 중요한 부분을 앞에 배치해서 뒷부분이 없어지더라도 내용을 잃지 않도록 주의하세요.
  - "키워드 뭉치" 스타일의 제목은 피하세요. 제목이 단순한 단어 나열에 불과하다면 검색 알고리즘이 결과에서 순서를 내리곤 합니다.
  - 웹 사이트 내에서 제목을 최대한 겹치지 않도록 하세요. 중복, 혹은 유사한 제목은 검색 결과의 정확도를 떨어트리는 요인입니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/title

<br><hr>

## 3. meta

- HTML `<meta>` 요소는 `<base>`, `<link>`, `<script>`, `<style>`, `<title>`과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타냅니다.
  - charset 특성 : 페이지의 문자 인코딩을 선언합니다. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "utf-8"의 대소문자 구분 없는 ASCII 표현이어야 합니다.
    - 유니코드(영어: Unicode)는 전 세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준이며, 유니코드 협회(Unicode Consortium)가 제정한다. 유니코드의 인코딩 포맷이 "utf-8"이다.
  - name 특성 : name과 content 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있습니다. name은 이름, content는 값을 담당합니다.
    - application-name: 웹 페이지에서 구동 중인 애플리케이션의 이름.
      author: 문서 저작자.
    - description: 페이지에 대한 짧고 정확한 요약. Firefox, Opera 등 여러 브라우저는 즐겨찾기 페이지의 기본 설명 값으로 description 메타데이터를 사용합니다.
    - generator: 페이지를 생성한 소프트웨어의 식별자.
    - keywords: 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록.
    - viewport : 뷰포트의 초기 사이즈에 대한 힌트. 모바일 장치에서만 사용합니다.
    - referrer: 문서에서 시작하는 요청의 HTTP Referer 헤더를 아래 표와 같이 통제합니다
      - no-referrer HTTP Referer 헤더를 전송하지 않습니다.
        - origin : 문서의 출처를 전송합니다.
        - no-referrer-when-downgrade : 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 전체 URL을 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다. 기본 동작 방식입니다.
        - origin-when-cross-origin : 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 출처만 전송합니다.
        - same-origin : 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 아무 레퍼러 정보도 보내지 않습니다.
        - strict-origin : 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 출처를 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다.
        - strict-origin-when-cross-origin : 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 목적지가 현재 문서와 동일하거나 더 높은 보안 수준(HTTP(S)→HTTPS)을 가진 경우 자신의 출처를 전송합니다. 그 외의 경우 아무 레퍼러 정보도 보내지 않습니다.
        - unsafe-URL : 동일 출처와 교차 출처 요청 모두에 대해서 전체 URL을 전송합니다.

예시

```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="dark light">
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta  
출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name  
출처 : [아스키코드와 유니코드](https://whatisthenext.tistory.com/103)

<br><hr>

## 4. link

- HTML `<link>` 요소는 현재 문서와 외부 리소스의 관계를 명시합니다. `<link>`는 스타일 시트를 연결할 때 제일 많이 사용하지만, 사이트 아이콘("파비콘"과 홈 화면 아이콘) 연결 등 여러가지로 쓰일 수 있습니다.
- media 특성을 사용해 미디어 유형이나 쿼리를 지정할 수도 있습니다. 그러면 해당 미디어 조건을 만족할 때만 리소스를 불러옵니다.
  - type 특성 : 이 특성은 링크된 콘텐츠의 타입을 정의하는데 사용됩니다. 특성의 값은 text/html, text/css와 같은 MIME 타입이여야합니다. 이 특성은 링크된 스타일시트의 타입을 지정하는데 쓰이는것이 보통이며, text/css 값이 가장 흔합니다.
- 아이콘을 위한 rel 값도 여러개가 있으며, 주 용도는 다양한 휴대기기 플랫폼의 특별한 아이콘을 나타내기 위함입니다. sizes 특성은 아이콘 크기를, type 특성은 연결한 리소스의 MIME을 포함합니다. 브라우저는 이런 여러가지 정보를 통해 가장 적합한 아이콘을 선택합니다.

예시

```
<link rel="stylesheet" href="style.css">
<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png">
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/link

<br><hr>

## 5. MIME 타입

- MIME 타입이란 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘입니다: 웹에서 파일의 확장자는 별 의미가 없습니다. 그러므로, 각 문서와 함께 올바른 MIME 타입을 전송하도록, 서버가 정확히 설정하는 것이 중요합니다. 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지를 결정하기 위해 대게 MIME 타입을 사용합니다.
- 일반적인 구조 : type/subtype

예시  
text/plain  
text/html  
image/jpeg  
image/png  
audio/mpeg  
audio/ogg  
audio/\*  
video/mp4  
application/octet-stream  
…

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types

<br><hr>

## 6. style

- HTML `<style>` 요소는 문서나 문서 일부에 대한 스타일 정보를 포함합니다.

예시

```
<!doctype html>
<html>
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
<body>
  <p>This is my paragraph.</p>
</body>
</html>
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/style

<br><hr>

## 7. script

- HTML `<script>` 요소는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 씁니다. WebGL의 GLSL 셰이더 프로그래밍 언어, JSON 등 다른 언어와도 사용할 수 있습니다.
- 보통 `<body>` 안의 마지막 부분에 넣는다.

예시

```
<script src="javascript.js"></script>
<script>
  alert("Hello World!");
</script>
```

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/script

<br><hr>
