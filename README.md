# Jeff's NextJS Study Log

## 1. CSR vs SSR

```
rendering : 브라우저가 html 을 읽는 동작
```


### CSR
- (* client-side-rendering)
- client 가 application 에 접속하면, server 는 화면을 그릴 재료를 응답해준다.
- server 에서 받은 js 가 실행되며, html 을 만들고 출력한다.
  - js 실행이 이전까지, 출력되는 것은 빈 html
    - 대부분의 검색엔진은 js 실행 이전의 html 정보만 수집한다.
    - seo (검색엔진최적화) 에 불리하다.
- server 로부터 다운로드 해야 할 것(js bundle 등)의 사이즈 가 크다.
- 한번 다운로드된 스크립트에 대하여 client 에서 계속 관리하므로, 첫 로드 후부턴 빠르게 rendering 할 수 있다.


### SSR 
- (* server-side-rendering)
- client 요청에 맞는 html 파일을 만들어 응답하는 방식
- 'render' 가 가능한 상태로 전달된다.
  - (* pre-render)
  - js 실행 이전이라도, 사용자는 서비스 view 를 볼 수 있다.
  - seo (검색엔진최적화) 에 유리하다.


### Hydration

-

- 사용자에 서버에서 전달받은 html 을 일단 그대로 제공
  - 일단 화면을 빠르게 채우기 위함이다.
- eventListener 를 추가하거나 상태를 관리할 수 있도록 하여, 동적인 컴포넌트로 initialize 된다.
  - javascript 를 통해 제어할 수 있는 기능들이 컴포넌트에 주입되기 시작한다. (이것이 hydration)


## 2. Routing


### Client Side Routing
- url 경로와는 상관없이 서버는 모든 페이지 정보를 client 에 내려준다.
- client 는 javascript 를 통해, 경로에 맞는 콘텐츠를 제어/제공한다.
- SPA (Single Page Application) 에 특징이다.
- 첫 요청에 모든 리소스를 가져오기 때문에, 초기 페이지 로드 시간이 느리다.
- 페이지 전환에 따른 후속 요청이 불필요하다.

### Server Side Routing
- client 가 접근한 특정 페이지에 대한 html 을 반환한다. (css 등 리소스와 함께)
- 초기 페이지 로드 시간이 빠르다.
- 페이지가 전환될 경우, 그에 대한 페이지 요청이 다시 발생한다.
- 페이지 전환 간에, 깜박임이 발생할 수 있다.
  - 전환할 페이지의 리소스를 요청-응답 하는 시간이 있기 때문이다.

