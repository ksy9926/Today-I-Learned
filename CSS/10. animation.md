# 애니메이션

> [1. animation](#1-animation)
>
> [2. @keyframes](#2-keyframes)
>
> [3. animation-name, animation-duration](#3-animation-name-animation-duration)
>
> [4. animation-delay, animation-timing-function](#4-animation-delay-animation-timing-function)
>
> [5. animation-iteration-count, animation-direction](#5-animation-iteration-count-animation-direction)
>
> [6. animation-play-state, animation-fill-mode](#6-animation-play-state-animation-fill-mode)

<br><hr>

## 1. animation

- 다수의 스타일을 전환하는 애니메이션을 적용한다. 한 번에 사용할 경우 delay를 duration 뒤에 적어야 한다.
- 초기값
  - animation-name: none
  - animation-duration: 0s
  - animation-timing-function: ease
  - animation-delay: 0s
  - animation-iteration-count: 1
  - animation-direction: normal
  - animation-fill-mode: none
  - animation-play-state: running

```
animation: 3s linear 1s infinite alternate slidein;
```

<br><hr>

## 2. @keyframes

- 개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 애니메이션 과정의 중간 절차를 제어할 수 있게 한다.

```
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
```

<br><hr>

## 3. animation-name, animation-duration

- `animation-name` : 하나 이상의 @keyframes 이름을 적용한다. 애니메이션의 이름은 대소문자가 구분되며 a-z, 0-9, \_, - 로 작성하여야 하며 첫번째는 대쉬가 아닌 글자를 작성하여야 한다.
- `animation-duration` : 애니메이션의 한 사이클을 완료하는데 걸리는 시간을 설정. `animation-delay` 는 음수값이 가능하지만 `animation-duration`은 음수값이 불가능하다.

```
animation-name: bounce;
animation-duration: 120ms;
```

<br><hr>

## 4. animation-delay, animation-timing-function

- `animation-delay` : 애니메이션이 시작할 시점을 지정한다. 음수 값을 지정하면 즉시 시작하지만 해당 시간이 지난 지점부터 시작한다.
- `animation-timing-function` : 애니메이션의 시간함수. ease-in, ease-out, ease, step-start, step-end, cubic-bezier() 등을 사용할 수 있다.

```
animation-delay: 2s;
animation-timing-function: ease-in-out;
```

## 5. animation-iteration-count, animation-direction

- `animation-iteration-count` : 애니메이션의 반복 횟수를 정한다.
- `animation-direction` : 애니메이션이 앞으로, 뒤로 또는 앞뒤로 번갈아 재생되어야 하는지 여부를 지정한다.

```
animation-iteration-count: infinite;
animation-iteration-count: 3;

animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;
```

<br><hr>

## 6. animation-play-state, animation-fill-mode

- `animation-play-state` : 애니메이션의 실행/정지 상태를 설정.
- `animation-fill-mode` : 애니메이션이 실행 전과 후에 대상에 스타일을 적용하는 방법을 지정
  - none : 애니메이션이 실행되지 않을 때 keyframe의 스타일을 적용하지 않음
  - forwards : 애니메이션이 끝난 후의 마지막 keyframe에 의해 설정된 스타일을 유지한다.
  - backwards : 애니메이션이 시작되기 전 keyframe에 의해 설정된 스타일을 적용
  - both : forwards와 backwards 모두 적용

```
animation-play-state: running;
animation-play-state: paused;

animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
```

<br><hr>

참고 : https://developer.mozilla.org/ko/docs/Web/CSS/animation  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/animation-duration  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/animation-delay  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/animation-direction  
참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state  
참고 : https://developer.mozilla.org/ko/docs/Web/CSS/animation-fill-mode
