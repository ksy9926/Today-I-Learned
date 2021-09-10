# flex

> [1. flexbox 개요](#1-flexbox-개요)
>
> [2. transition-property, transition-duration](#2-transition-property-transition-duration)
>
> [3. transition-delay, transition-timing-function](#3-transition-delay-transition-timing-function)
>
> [4. transition](#4-transition)

<br><hr>

## 1. flexbox 개요

-

<br><hr>

## 2. transition-property, transition-duration

- `transition-property` : 어떤 요소에 transition을 적용할 지를 선택한다. 모든 요소를 선택하려면 all을 쓰면 된다.
- `transition-duration` : 요소가 얼마만큼의 시간을 가지고 변할지를 설정한다. s(초)와 ms(밀리초)의 단위를 사용한다.

```
.box{
  transition-property: margin-right, color;
  transition-duration: 1.5s;
}
```

<br><hr>

## 3. transition-delay, transition-timing-function

- `transition-delay` : 요소의 transition에 delay를 준다.
- `transition-timing-function` : 변하는 효과의 시간함수를 설정해준다. ease-in, ease-out, ease, step-start, step-end, cubic-bezier() 등을 사용할 수 있다.

```
.box{
  transition-delay: 1s;
  transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
}
```

<br><hr>

## 4. transition

- 위의 속성들을 한 번에 표시.
- duration 과 delay는 둘 다 단위가 같기 때문에 순서가 중요하다. 만약 시간을 하나만 쓸 경우 duration으로 적용이 되며 시간을 두 개 쓸 경우 앞에 쓴 것이 duration, 뒤에 쓴 것이 delay가 된다.
- 보통 property를 가장 앞에 써 준다.

```
/* property name | duration */
transition: margin-left 4s;

/* property name | duration | timing function | delay */
transition: margin-left 4s ease-in-out 1s;
```

<br><hr>

출처 : https://developer.mozilla.org/ko/docs/Web/CSS/transition  
출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property  
출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration  
출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay  
출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
