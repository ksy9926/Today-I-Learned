# CORS (Cross-Origin Resource Sharing)

> [1. CORS 소개](#1-cors-소개)
>
> [2. Origin](#2-origin)
>
> [3. SOP(Same-Origin Policy)](#3-sopsame-origin-policy)
>
> [4. CORS 동작 방식](#4-cors-동작-방식)
>
> [5. CORS 해결 방법](#5-cors-해결-방법)

<br><hr>

## 1. CORS 소개

- CORS(Cross-Origin Resource Sharing)이란 브라우저와 서버 간 통신을 할 때, 혹시나 원하지 않는 리소스를 받지 않을 수 있도록 방어해주는 브라우저의 보안 규칙이다.
- 한국어로 직역하면 교차 출처 자원 공유가 되는데 교차 출처 보다는 다른 출처가 의미상 조금 더 근접하다.

<br><hr>

## 2. Origin

- 서버의 위치를 의미하는 https://naver.com 과 같은 URL들은 여러 개의 구성 요소로 이루어져 있다.
- Origin은 Protocol + Host + 포트 번호를 합친 것을 의미한다.
- `https://news.naver.com/main/list.naver?mode=LSD&mid=sec&sid1=001` 이라는 주소가 있을 때 다음과 같다.
  - Protocol : `https://`
  - Host : `news.naver.com`
  - Path : `main/list.naver`
  - Query String : `?mode=LSD&mid=sec&sid1=001`
- 개발자 도구에서 Location 객체가 가지고 있는 origin 프로퍼티에 접근함으로써 출처를 알아낼 수도 있다.

```
console.log(location.origin);

"https://news.naver.com"
```

<br><hr>

## 3. SOP(Same-Origin Policy)

- 웹 생태계에는 다른 출처로의 리소스 요청을 제한하는 것과 관련된 두 가지 정책이 존재한다. 하나는 CORS, 또 하나는 SOP(Same-Origin Policy)이다.
- SOP는 2011년 처음 등장한 보안 정책으로 "같은 출처에서만 리소스를 공유할 수 있다"라는 규칙을 가진 정책이다.
- 하지만 웹에서 다른 출처의 리소스를 가져와서 사용하는 일은 매우 빈번해서 몇 가지 예외 조항을 두고 이 조항에 해당하는 리소스 요청은 허용하기로 했는데 그 중 하나가 CORS 정책을 지킨 리소스 요청이다.
- 즉 우리가 다른 출처로 리소스를 요청하면 SOP 정책을 위반한 것이 되고, 거기다가 CORS 정책까지 지키지 않는다면 다른 출처의 리소스를 사용할 수 없게 되는 것이다.

<br><hr>

## 4. CORS 동작 방식

- 기본적으로 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 `Origin`이라는 필드에 요청을 보내는 출처를 함께 담아보낸다
  - `Origin: https://news.naver.com`
- 이후 서버가 응답을 할 때 응답 헤더의 `Access-Control-Allow-Origin`이라는 값에 "이 리소스를 접근하는 것이 허용된 출처"를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 `Origin`과 서버 응답의 `Access-Control-Allow-Origin`을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.

<br><hr>

## 5. CORS 해결 방법

- `Access-Control-Allow-Origin` 세팅하기
  - 가장 대표적인 방법으로 서버에서 `Access-Control-Allow-Origin` 헤더에 알맞은 값을 세팅해주는 것이다. 이때 와일드카드인 `*`을 사용하여 이 헤더를 세팅하게 되면 모든 출처에서 오는 요청을 받아먹겠다는 의미이므로 당장은 편할 수 있겠지만, 바꿔서 생각하면 정체도 모르는 이상한 출처에서 오는 요청까지 모두 받아먹겠다는 오픈 마인드와 다를 것 없으므로 보안적으로 심각한 이슈가 발생할 수도 있다. 그러니 `Access-Control-Allow-Origin: https://news.naver.com`과 같이 출처를 명시해주는 것이 좋다.
- `Webpack Dev Server`로 리버스 프록싱하기
  - 프론트엔드 개발자는 대부분 웹팩과 `webpack-dev-server`를 사용하여 자신의 머신에 개발 환경을 구축하게 되는데, 이 라이브러리가 제공하는 프록시 기능을 사용하면 아주 편하게 CORS 정책을 우회할 수 있다.
  ```
  module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.evan.com',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      }
    }
  }
  ```
  - 이렇게 설정을 해놓으면 로컬 환경에서 /api로 시작하는 URL로 보내는 요청에 대해 브라우저는 localhost:8000/api로 요청을 보낸 것으로 알고 있지만, 사실 뒤에서 웹팩이 https://api.evan.com으로 요청을 프록싱해주기 때문에 마치 CORS 정책을 지킨 것처럼 브라우저를 속이면서도 우리는 원하는 서버와 자유롭게 통신을 할 수 있다. 즉, 프록싱을 통해 CORS 정책을 우회할 수 있는 것이다.

<br><hr>

참고 : https://evan-moon.github.io/2020/05/21/about-cors/
