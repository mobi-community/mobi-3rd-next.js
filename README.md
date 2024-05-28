# Jeff's NextJS Study Log


## CSR
- (* client-side-rendering)
- client 가 application 에 접속하면, server 는 화면을 그릴 재료를 응답해준다.
- server 에서 받은 js 가 실행되며, html 을 만들고 출력한다.
  - js 실행이 이전까지, 출력되는 것은 빈 html
    - 대부분의 검색엔진은 js 실행 이전의 html 정보만 수집한다.
    - seo (검색엔진최적화) 에 불리하다.
- server 로부터 다운로드 해야 할 것(js bundle 등)의 사이즈 가 크다.
- 한번 다운로드된 스크립트에 대하여 client 에서 계속 관리하므로, 첫 로드 후부턴 빠르게 rendering 할 수 있다.


## SSR 
- (* server-side-rendering)
- client 요청에 맞는 html 파일을 만들어 응답하는 방식
- 'render' 가 가능한 상태로 전달된다.
  - (* pre-render)
  - js 실행 이전이라도, 사용자는 서비스 view 를 볼 수 있다.
  - seo (검색엔진최적화) 에 유리하다.

## Hydration
- 사용자에 서버에서 전달받은 html 을 일단 그대로 제공
  - 일단 화면을 빠르게 채우기 위함이다.
- eventListener 를 추가하거나 상태를 관리할 수 있도록 하여, 동적인 컴포넌트로 initialize 된다.
  - javascript 를 통해 제어할 수 있는 기능들이 컴포넌트에 주입되기 시작한다. (이것이 hydration)



## Client Side Routing
- url 경로와는 상관없이 서버는 모든 페이지 정보를 client 에 내려준다.
- client 는 javascript 를 통해, 경로에 맞는 콘텐츠를 제어/제공한다.
- SPA (Single Page Application) 에 특징이다.
- 첫 요청에 모든 리소스를 가져오기 때문에, 초기 페이지 로드 시간이 느리다.
- 페이지 전환에 따른 후속 요청이 불필요하다.

## Server Side Routing
- client 가 접근한 특정 페이지에 대한 html 을 반환한다. (css 등 리소스와 함께)
- 초기 페이지 로드 시간이 빠르다.
- 페이지가 전환될 경우, 그에 대한 페이지 요청이 다시 발생한다.
- 페이지 전환 간에, 깜박임이 발생할 수 있다.
  - 전환할 페이지의 리소스를 요청-응답 하는 시간이 있기 때문이다.


<br/>
<br/>

## SSG (정적 사이트 생성)
- 웹 사이트의 모든 페이지를 build 시점에 미리 랜더링하여 정적 파일로 생성하는 방법이다.
- 콘텐츠가 자주 변경되지 않는 웹사이트에 적합하다.

### 장점
#### server 요청 없이도, 로드가 매우 빠르다.
- 모든 페이지가 사전에 랜더링되어 정적 파일로 제공되기 때문이다.

#### 보안이 강화(?)된다.
- build 가 완료된 시점에서, server 는 더이상 페이지 생성을 위해 실행할 코드가 없다. 
  - 요청이 있을 경우, 브라우저에 제공되는 것은 화면에 그려질 html 문서와 js 번들 뿐이다.
  - SQL 인젝션, 원격 코드 실행 등 server 의 동작을 이용한 공격을 막을 수 있다.

- SSR 이나 API를 통해 데이터를 가져오는 경우 DB 와의 연결이 필요하지만, SSG 는 이미 페이지를 완성하여 가지고 있다.
  - build 시점에 필요한 데이터 패칭이 모두 완료되어있다.
  - run-time 에 DB 와의 상호작용은 필요하지 않다.

#### SEO 최적화
- 모든 페이지가 사전에 렌더링되므로, 검색 엔진 크롤러가 쉽게 콘텐츠를 인덱싱할 수 있어 SEO 성능이 향상된다.

### getStaticProps()
- build 시점에 페이지에 필요한 데이터를 가져오고, 페이지 컴포넌트에 props 로 전달한다.

### getStaticPaths()
- 동적인 경로를 가진 페이지의 path 목록을 build 시점에 생성한다.

### ISR (증분정적생성)
- 초기 빌드 시 정적 페이지 생성 후 설정된 주기에 따라 페이지를 재생성한다.
- SSR 과 SSG 의 장점이 적절히 결합되었다.
  - SSG 와 비교
    - 공통점) 요청-응답 시간이 짧다. (빠르다.)
    - 차이점) ISR 은 run-time 중 페이지가 생성된다.
  - SSR 과 비교
    - 공통점) run-time 중, 동적으로 데이터를 패칭하여 제공한다.
    - 차이점) SSR 과 비교해, 최신의 데이터를 활용한다고 보장할 수 없다. (신선도가 떨어질 수 있다.)
  
<br/>
<br/>


## AppRouter

- NextJS 13 버전에서 새롭게 도입한 서버 중심의 라우팅 

### 1. 파일 및 폴더 구조에 따른 자동 라우팅
- `app` 디렉토리 내부의 파일과 폴더 구조에 따라 자동으로 라우트를 생성한다.

### 2. 세그먼트 갱신 & 코드 스플리팅

> 세그먼트 (segment) 란?
> 
> `/promotion/nail/page.tsx` 경로 상에서,
> "promotion", "nail" 과 같이, 라우트의 특정 부분이나 경로의 일부분을 의미한다.

- 경로 이동시, "url 업데이트" & "변경된 세그먼트(=sub-component) 관련 컴포넌트의 리렌더링" 이 일어난다.
  - page 전체에 대한 데이터를 서버에 요청하지 않는다.
- 세그먼트 별 코드 스플리팅 기능이 제공된다.

### 3. 서버 사이드 컴포넌트 기본 제공
- server-sie-component 를 기본 제공한다.
- 모든 컴포넌트에 대해 js 번들을 제공하지 않도록 최적화하였다.
- 브라우저에서 이벤트 처리를 하거나, js 에 의해 제어해야할 client-side-component 가 있다면, "use client" 를 명시함으로써 hydration 대상임을 지정한다.

#### 4. 별도의 API 라우팅은 지원하지 않는다.

## PagesRouter

- `pages` 디렉토리 내부의 파일과 폴더 구조에 따라 자동으로 라우트를 생성한다.
- 경로가 ㄴㅇㅁㄹ

### 1. 파일 및 폴더 구조에 따른 자동 라우팅
- `pages` 디렉토리 내부의 파일과 폴더 구조에 따라 자동으로 라우트를 생성한다.

### 2. Client 중심 라우팅
- 모든 페이지 컴포넌트는 클라이언트 측 컴포넌트입니다.
- 브라우저는 페이지 이동 시 해당 페이지의 컴포넌트를 로드하고 렌더링합니다.

### 3. API Route
- `pages/api` 디렉토리 아래의 파일을 통해 엔드포인트를 생성하고 API를 관리합니다.


## Link Component
----

### `<a>` 와 비교
- `<a>` 를 통해 페이지를 이동할 경우, 해당 사이트에 처음 접근한 것으로 간주한다. 
- 변경된 세그먼트 관련한 것 뿐만 아니라 많은 js 파일을 다시 로드한다.

### Code Splitting
- 페이지 이동은 js 에 의해 제어된다. 
- `<Link>` 를 이용한다면, 뷰포트에 감지된 컴포넌트에 대한 js 파일만 로드한다.
- 한 페이지 내에 아주 많은 `<Link>` 가 있더라도, 현재 뷰포트 외의 것은 바로 로드하지 않도록 최적화되어 있다.

### pre-fetching
- 뷰포트에 감지된 `<Link>` 에 대하여, 해당 링크에 연결된 세그먼트의 데이터를 미리 가져온다.
- 페이지 전환 후, 로딩 시간을 없애거나 단축할 수 있다.
- "prefetch" 속성에 "false" 값을 주어, 해당 기능을 비활성화 할 수 있다.

## useRouter
----

### 언제 `<Link>` , `useRouter()` 를 사용해야하는가?
#### `<Link>` 를 사용하면 좋다.
- 사용자에게 명시적인 내비게이션 옵션을 제공하는 경우.
- 페이지가 뷰포트에 나타날 때 자동 프리패칭을 활용하고자 할 경우.
- SEO 최적화가 중요한 경우.
#### `useRouter()`를 사용할 때
- 버튼 클릭 등 다양한 이벤트 발생에 의해 페이지 전환이 일어나는 경우.
- 라우팅 이벤트를 처리하는 작업을 수행해야 할 경우. => ex) loading-indicator  