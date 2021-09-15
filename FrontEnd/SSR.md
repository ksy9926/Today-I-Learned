# SSR(Server Side Rendering)

> [1. SSR, CSR](#1-ssr-csr)
>
> [2. SSR, CSR의 차이](#2-ssr-csr의-차이)
>
> [3. SPA와 MPA](#3-spa와-mpa)
>
> [4. SPA에서의 SSR(Universal Server Side Rendering)](#4-spa에서의-ssruniversal-server-side-rendering)

<br><hr>

## 1. SSR, CSR

- SSR(Server Side Rendering) : 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식
- CSR(Client Side Rendering) : 최초에 1번 서버에서 데이터가 없는 HTML 페이지를 받아오고 이후에는 사용자의 요청이 올 때마다, 리소스를 서버에서 제공한 후 클라이언트가 해석하고 렌더링을 하는 방식

<br><hr>

## 2. SSR, CSR의 차이

- 초기 렌더링 속도 : CSR의 경우 페이지를 읽어들이는 시간, 자바스크립트를 읽어들이는 시간, 자바스크립트가 화면을 그리는 시간까지 모두 마쳐야 콘텐츠가 사용자에게 보여진다. 여기에 웹 서버에서 콘텐츠 데이터라도 가져와야 한다면 그 시간은 더욱 길어진다. 즉, 초기 구동속다가 느리다. 반면 SSR의 경우 서버에서 view를 렌더링하여 가져오기 때문에 view를 보기까지 초기 구동속도가 빠르다.
- SEO : 대부분의 웹 크롤러, 봇들이 자바스크립트 파일을 실행시키지 못하고 HTML에서만 컨텐츠를 수집한다. 때문에 CSR방식으로 개발된 페이지를 빈 페이지로 인식하게 된다. 반면 SSR은 HTML에 모든 컨텐츠가 저장되어 있기 때문에 SEO 적용에 큰 문제가 없다.
- 보안 : 기존의 SSR에서는 사용자에 대한 정보를 서버 측에서 세션으로 관리를 하지만 CSR 방식은 클라이언트 측의 쿠키말고는 사용자에 대한 정보를 저장할 공간이 마땅치 않다.

<br><hr>

## 3. SPA와 MPA

- SPA(Single Page Application) : 한 개의 페이지로 이루어진 어플리케이션. 하나의 페이지를 동적으로 다시 작성한다.(Client Side Rendering)
- MPA(Multi Page Application) : 여러 개의 페이지로 이루어진 어플리케이션. 서버에서 페이지를 가져온다.

<br><hr>

## 4. SPA에서의 SSR(Universal Server Side Rendering)

- SPA에서 SSR을 가능하게 하려면 처음 로드하는 페이지만 SSR로 가져오고 그 이후는 CSR으로 변경된 부분만 갱신하면 된다. 이로써 각자의 장점을 가져오면서 빠른 초기 속도와 SEO, 부드러운 페이지 전환이 가능해진다.
- 하지만 단점도 있다.
  - 코드가 복잡하다.
  - 서버에서 렌더링을 수행하므로 단순 리소스 서빙보다는 아무래도 CPU를 많이 사용하게 되고, 부하가 걸릴 수 있다.
  - 서버에 익숙하지 않은 Frontend 개발자의 경우 클라이언트처럼 개발을 진행하게 되면 의도하지 않은 버그가 생길 수 있다.

<br><hr>

참고 : https://blog.hahus.kr/csr-ssr-spa-mpa-ede7b55c5f6f  
참고 : https://evan-moon.github.io/2018/09/25/universal-ssr/
