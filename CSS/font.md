# 폰트 관련 속성

> [1. font](#1-font)
>
> [2. letter-spacing, word-spacing](#2-letter-spacing-word-spacing)
>
> [3. text-align, text-indent, text-decoration, text-transform](#3-text-align-text-indent-text-decoration-text-transform)
>
> [4. word-break](#4-word-break)

<br><hr>

## 1. font

- `font-size` : 폰트의 크기를 조절. 보통 기본 사이즈는 16px이다. 보통 px, em, rem, % 등의 단위를 사용한다.
- `font-style` : oblique, italic 등 폰트의 스타일을 지정할 때 사용.
- `font-weight` : 폰트의 굵기를 조절. bold, 100 ~ 900 등으로 사용한다.
- `font-family` : 폰트의 글꼴을 변경. 여러 개의 글꼴을 나열해서 적용이 되지 않을 때마다 다음 폰트를 적용시킨다. 기본 글꼴은 generic family name 중 하나를 사용한다.(sans-serif, monospace 등)
- `line-height` : 폰트의 줄 높이를 설정.
- `font`: 폰트 관련 속성들을 한 줄에 표현할 수 있다. `font-size`와 `font-family`는 필수이며 나머지는 선택이다.(`font-style`, `font-variant`, `font-weight`, `line-height`)
  - `font-style`과 `font-weight`는 `font-size` 앞에 적어야 한다.
  - `line-height`는 `font-size`에 /를 붙여 뒤에 작성한다

```
.text {
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  font-family: "Gill Sans Extrabold", sans-serif;
  line-height: 24px;
}

.text{
  font: 700 italic 24px/24px "Gill Sans Extrabold", sans-serif;
}

/* 주의할 점 */
/* font 속성은 입력하지 않을 경우 기본값이 적용된다. font-style 을 italic으로 지정해주고 밑에 font에 font-style을 쓰지 않을 경우 italic이 아닌 기본값이 적용된다. */

.text{
  font-style: italic;
  font: 700 24px/24px "Gill Sans Extrabold", sans-serif;
}
```

<br><hr>

## 2. letter-spacing, word-spacing

- `letter-spacing` : 글자간의 간격을 설정. 기본값에 + 또는 -가 된다. px, em, % 등의 단위 사용 가능.
- `word-spacing` : 단어간의 간격을 설정. 기본값에 + 또는 -가 된다. px, em, % 등의 단위 사용 가능.
- 접근성 고려사항 : `letter-spacing` 값이 너무 크면 스타일이 적용된 단어를 읽을 수 없게 만들고 너무 큰 음수 값인 경우 단어를 인식할 수 없을 만큼 겹치게 된다. 그렇기에 적절한 값을 유지해야 한다. `word-spacing`도 마찬가지이다.

```
.text {
  letter-spacing: 10px;
  word-spacing: -5px;
}
```

<br><hr>

## 3. text-align, text-indent, text-decoration, text-transform

- `text-align` : 텍스트의 수평 정렬을 설정. 블록 요소에만 적용된다. start, end, left, right, center, justify, justify-all 등의 값으로 설정 가능하다.
- `text-indent` : 텍스트의 들여쓰기 간격을 설정. 블록 요소에만 적용된다.
- `text-decoration` : 텍스트의 라인을 위치, 컬러, 스타일, 굵기 등으로 한번에 꾸미기 위해 사용
  - `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, `text-decoration-thickness` 를 순서 상관없이 사용 가능
- `text-transform` : 한글에는 사용할 수 없고 영어나 일어 등에 사용 가능하다. uppercase, lowercase, capitalize

```
.text {
  text-align: center;
  text-indent: 10px;
  text-decoration: wavy line-through red 4px;
  text-transform: capitalize;
}
```

<br><hr>

## 4. word-break

- `word-break` : 글자가 박스 가로폭을 초과할 때 라인 줄바꿈 설정. 영어와 다른 언어간에 동작하는게 다르다.
  - normal : 한중일 언어의 경우 자동으로 줄바꿈 적용. 영어의 경우 줄바꿈이 되지 않고 뚫고 나간다.
  - break-all : 영어에서 자동으로 줄바꿈을 적용.
  - keep-all : 한중일 언어에서 줄바꿈이 되지 않고 뚫고 나간다.

```
p {
  word-break: break-all;
}
```

<br><hr>

참고 : https://developer.mozilla.org/ko/docs/Web/CSS/font  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/text-align  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/word-break
