# section 2 - Routing

## URL Path & Page Render

- `app` 폴더 바로 아래 있는 `page` 파일이 루트페이지이다.

- `app` 폴더 아래 폴더를 생성할 경우, 해당 폴더의 이름으로 url 경로가 만들어진다.
  - 단 해당 폴더의 자식 트리 어딘가에 `page` 파일이 반드시 있어야만 url 경로로 활용할 수 있다.


### 경로가 될 수 있는 것, 페이지로 rendering 되는 것

```
app
│
├─ layout.tsx
│
├─ page.tsx
│
├─ about-us
│  │
│  ├─ page.tsx   
│  │
│  └─ company
│     │
│     └─ sales
│        │
│        └─ page.tsx 
│
└─ components
   │
   └─ avatar.tsx
```

#### ① 경로로 포함 가능 ✅, 페이지로 rendering 가능 ✅

- ex) about-us

  - `/about-us/company/sales/page` ✅
    - 해당 폴더 하위, 서브트리 중 `page.tsx` 파일이 존재하기 때문에 가능!

  - `/about-us` ✅
    -  직속 자식(?) 으로 `page.tsx` 파일을 가지고 있기 때문에 가능!


#### ② 경로로 포함 ✅, 페이지로 rendering 🚫

- ex) company

  - `/about-us/company/sales/page` ✅
    - 해당 폴더 하위, 서브트리 중 `page.tsx` 파일이 존재하기 때문에 가능!

  - `/about-us/company` 🚫
    -  직속 자식(?) 으로 `page.tsx` 파일이 없기 때문에 페이지로써 유효하지 않음.!


#### ③ 경로로 포함 🚫, 페이지로 rendering 🚫

- ex) components

  - `/components` 🚫
    
    - 해당 폴더 아래, 서브트리 중 `page.tsx` 파일이 존재하기 때문에 가능!

    -  직속 자식(?) 으로 `page.tsx` 파일이 없기 때문에 페이지로써 유효하지 않음.!


<br/>

## CSR vs SSR

### CSR 

#### ① Rendering

```
* rendering 이란, html 을 브라우저가 읽는 것.!
```

- react 에서 화면을 그리는 방법은 기본적으로 csr 이다.
- react 코드는 기본적으로 javascript 이다.
  - react 에서 rendering 이란, javascript 기반의 react code 를 html 로 변환하는 것.
- react 로 만들어진 웹/앱에 처음 들어가거나 새로고침을 하는 순간, 깜박임이 있다.
  - 사용자가 페이지에 접근한 직후에는, 화면에 그릴 html 이 없기 때문이다.
  - javascript 파일을 다운받아 실행하면, 그제야 html 이 생성되어 브라우저가 읽는 것.

#### ② SEO (검색엔진 최적화)
- 검색엔진은 javascript 실행 이전의 html 문서 속 중요한 정보를 찾아낸다.
- javascript 실행 이전 시점에 CSR 어플리케이션은 노출할 것이 없다.


### SSR
- next-js 는 기본적으로 ssr 을 지원한다.
- server 에서 이미 rendering 을 진행한다. (= pre-render)
  - 브라우저에서 request 를 보내면 (특정 페이지에 접근하면), 그에 대한 response 로 html 을 받게 된다.
- client 에선 javascript 실행 에 의존하지  않아도, html 을 가질 수 있다.


### Hydration
- 사용자에 서버에서 전달받은 html 을 일단 그대로 제공
  - 일단 화면을 빠르게 채우기 위함이다.
- eventListener 를 추가하거나 상태를 관리할 수 있도록 하여, 동적인 컴포넌트로 initialize 된다.
  - javascript 를 통해 제어할 수 있는 기능들이 컴포넌트에 주입되기 시작한다. (이것이 hydration)

<br/>

## "use client" 에 대하여..
- next 의 모든 컴포넌트는 ssr 이다.
  - 상단에 "use client" 를 적었다고 해서, client 가 render 하는 것이 아니다. 
- 이것이 적힌 컴포넌트는 client 단에서 react 컴포넌트로 초기화된다. (= client-component)
- 그 외, hydration 되지 않아도 되는 컴포넌트는 server-component 라고 한다.

### 장점
- hydration 대상 컴포넌트의 javascript 파일만 다운받아 실행하면 된다. 
  - 성능이 개선된다. 👍


### Server Component & Client Component

#### 공통
- server-component, client-component 둘 다 server 에서 rendering 된다. (ssr)

#### Client Component
- client-component 만 hydrate 대상이다.
- "use client" 를 적은 컴포넌트는, 그 모든 자식을 포함하여 전부 client-component 이다.
- client-component 안에 server-component 를 가질 수 **없다.**


#### Server Component
- server-component 안에 client-component 를 가질 수 **있다.**
- server-component 에서 사용하는 javascript 파일은 client 로 가지 않는다.
  - api-key 등이 담겨있어도 네트워크 통신 대상이 아니다. => 보안 👍

<br/>

## Layout
- layout 은 페이지를 wrapping 하는 컴포넌트
- layout 은 대체되지 않는다. => 중첩된다.
  - 폴더의 깊이 증가하며 많은 레이아웃이 있더라도, 전부 출력된다.
- `app` 폴더 하위 어딘가에, `layout` 파일이 있는 경우,,
  - depth 가 같은 `page` 파일을 포함하여, 같은 경로를 공유하는 `page` 가 랜더될 때, 함께 출력한다.
- layout 은 `children` 을 props 로 받아, return 문 안에 그것을 포함해야한다. 

<br/>

## MetaData
- 메타데이터는 객체이다.
- 특정 페이지에 대해 제목이나 설명 등, 검색엔진에 노출될 데이터가 있는 경우, 해당 파일에서 선언 & export 하면 된다.

### template 
- 템플릿을 사용할 경우, 반복해서 작성하는 값을 효율적으로 관리할 수 있다.
- 부모의 메타데이터와 병합된다.
  - 현재 페이지의 메타데이터에 'description' 이 없더라도, 부모의 메타데이터에 그것이 있다면 똑같은 값을 가진다. 

<br/>

## Group Route
- 폴더명에 소괄호를 추가한다.
- 소괄호가 있다고 해서, url 에는 전혀 영향이 없다.
- 아직 자세하게는 알아보지 않았다..

<br/>

## Dynamic Routing
- 대괄호 안에 path-variable 속성을 넣어, 경로를 만들 수 있다.
