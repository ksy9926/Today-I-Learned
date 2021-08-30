# 폼 관련 요소

> [1. form](#1-form)
>
> [2. label](#2-label)
>
> [3. fieldset, legend](#3-fieldset-legend)
>
> [4. input](#4-input)
>
> [5. button](#5-button)
>
> [6. select, option, optgroup](#6-select-option-optgroup)
>
> [7. datalist, list](#7-datalist-list)
>
> [8. textarea](#8-textarea)

<br><hr>

## 1. form

- HTML `<form>` 요소는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다.
  - action 특성 : 양식 데이터를 처리할 프로그램의 URI. 목적지의 주소와 같습니다. `<button>`, `<input type="submit">` (en-US), `<input type="image">` (en-US) 요소의 formaction 특성으로 재정의할 수 있습니다.
  - method 특성 : 양식을 제출할 때 사용할 HTTP 메서드.
    - post : POST 메서드. 양식 데이터를 요청 본문으로 전송합니다.
    - get : GET 메서드. 양식 데이터를 action URL과 ? 구분자 뒤에 이어 붙여서 전송합니다.

예시

```
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

```

<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/form

<br><hr>

## 2. label

- HTML `<label>` 요소는 사용자 인터페이스 항목의 설명을 나타냅니다.

예시

```
<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas">
</div>

<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas">
</div>

<label>Do you like peas?
<input type="checkbox" name="peas">
</label>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/label

<br><hr>

## 3. fieldset, legend

- HTML `<fieldset>` 요소는 웹 양식의 여러 컨트롤과 레이블(`<label>`)을 묶을 때 사용합니다.
- HTML `<legend>` 요소는 부모 `<fieldset>` 콘텐츠의 설명을 나타냅니다.

예시

```
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>

  </fieldset>
</form>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/legend

<br><hr>

## 4. input

- HTML `<input>` 요소는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다. 사용자 에이전트에 따라서 다양한 종류의 입력 데이터 유형과 컨트롤 위젯이 존재합니다. 입력 유형과 특성의 다양한 조합 가능성으로 인해, `<input>` 요소는 HTML에서 제일 강력하고 복잡한 요소 중 하나입니다.
  - type 특성
    - text : 디폴트 값. 한줄의 텍스트 필드입니다. 새줄 문자는 입력값으로부터 자동으로 제거됩니다. minlength와 maxlength를 통해 텍스트 길이 조건을 설정할 수 있습니다.
    - password : 값이 가려진 한줄 텍스트 필드. 사이트가 안전하지 않으면 사용자에게 경고합니다.
    - email : 이메일 주소를 편집할 수 있는 필드.
    - tel : 전화번호를 입력하는 컨트롤. 몇몇 장치에서 동적 키패드들과 전화번호 입력기를 표시한다.(휴대폰의 경우 자동으로 숫자 키패드가 뜨는 장치가 있다.)
    - number : 숫자를 입력하기 위한 컨트롤. 스피너를 표시하고 지원되는 기본 확인을 추가합니다. 몇몇 장치에서는 동적 키패드들과 숫자 키패드를 표시합니다.
    - range : 값이 가려진 숫자를 입력하는 컨트롤. 디폴트 값이 중간값인 범위 위젯으로 표시합니다. 접속사 min 와 max 사이에 사용되며 수용가능한 값의 범위를 정의합니다.
    - date : 날짜(연월일, 시간 없음)를 지정할 수 있는 컨트롤. 브라우저가 지원하는 경우, 활성화 시 날짜를 선택할 수 있는 달력 등을 열어줍니다.
    - month : 연과 월을 지정할 수 있는 컨트롤. 시간대는 지정할 수 없습니다.
    - time : 시간대가 없는 시간값을 입력하는 콘트롤
    - button : 기본 행동을 가지지 않으며 value을 레이블로 사용하는 푸시 버튼.
    - submit : 양식을 전송하는 버튼, value 특성을 함께 써 문구를 바꿀 수 있다.
    - reset : 양식의 내용을 디폴트값(기본값)으로 초기화하는 버튼. 권장되지 않습니다.
    - checkbox : 단일 값을 선택하거나 선택 해제할 수 있는 체크박스. checked 특성을 함께 써 체크 여부를 설정할 수 있습니다.
    - radio : 같은 name 값을 가진 여러개의 선택중에서 하나의 값을 선택하게 하는 라디오 버튼입니다.
  - name 특성 : input 양식 컨트롤의 이름. 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다
  - placeholder 특성 : 양식 컨트롤이 비어있는 때 양식 컨트롤에 나타나는 내용
  - autocomplete 특성 : 양식 자동생성 기능 (form autofill) 암시(자동완성기능). "on", "off"를 통해 조절할 수 있다.
  - required 특성 : 불리언값. 양식이 전송되기 위해서 반드시 입력하거나 확인이 필요한 값
  - readonly 특성 : 불리언값. 이 값은 수정이 불가능함
  - disabled 특성 : 양식 컨트롤이 비활성화되었는지의 여부
  - step 특성 : 유효한 증분적인 (Incremental)값
  - min, max 특성 : 최소값, 최대값

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/inpupt

<br><hr>

## 5. button

- HTML `<button>` 요소는 클릭 가능한 버튼을 나타냅니다. 버튼은 양식 내부는 물론 간단한 표준 버튼 기능이 필요한 곳이라면 문서 어디에나 배치할 수 있습니다. 기본값의 HTML 버튼은 사용자 에이전트의 호스트 플랫폼과 비슷한 디자인을 따라가지만, 외형은 CSS로 변경할 수 있습니다.
- `<button>` 요소는 `<input>` 요소보다 스타일을 적용하기 훨씬 수월합니다. `<input>`은 value 특성에 텍스트 값밖에 지정할 수 없지만, `<button>`은 내부 HTML 콘텐츠(`<em>`, `<strong>`, 심지어 `<img>`도)에 더해 ::after와 ::before 의사 요소를 사용하는 복잡한 렌더링도 가능합니다.
  - type 특성
    - submit: 버튼이 서버로 양식 데이터를 제출합니다. 지정하지 않은 경우 기본값이며, 유효하지 않은 값일 때도 사용합니다.
    - reset: `<input type="reset">`처럼, 모든 컨트롤을 초깃값으로 되돌립니다.
    - button: 기본 행동이 없으며 클릭했을 때 아무것도 하지 않습니다. 클라이언트측 스크립트와 연결할 수 있습니다.

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/button

<br><hr>

## 6. select, option, optgroup

- HTML `<select>` 요소는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다.
- HTML `<option>` 요소는 `<select>`, `<optgroup>`, `<datalist>` 요소의 항목을 정의합니다. 그러므로, `<option>`을 사용해 팝업 메뉴 등 목록에서 하나의 항목을 나타낼 수 있습니다.
- HTML `<optgroup>` 요소는 `<select>` 요소의 옵션을 묶을 수 있습니다.

예시

```
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
```

<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
<optgroup label="Theropods">
<option>Tyrannosaurus</option>
<option>Velociraptor</option>
<option>Deinonychus</option>
</optgroup>
<optgroup label="Sauropods">
<option>Diplodocus</option>
<option>Saltasaurus</option>
<option>Apatosaurus</option>
</optgroup>
</select>

<br>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/select

<br><hr>

## 7. datalist, list

- HTML `<datalist>` 요소는 다른 컨트롤에서 고를 수 있는 가능한, 혹은 추천하는 선택지를 나타내는 `<option>` 요소 여럿을 담습니다.

예시

```
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```

<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/datalist

<br><hr>

## 8. textarea

- HTML `<textarea>` 요소는 멀티라인 일반 텍스트 편집 컨트롤을 나타냅니다.

예시

```
<label for="story">Tell us your story:</label>

<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

<label for="story">Tell us your story:</label>

<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>

<br>

출처 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/textarea
