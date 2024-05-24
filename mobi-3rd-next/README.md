# TSAK 1

## Next.js 똑바로 알기

`next.js` 는 `React`를 기반으로 하는 웹 프레임워크로, 서버 사이드 렌더링(`SSR`)과 정적 사이트 생성(`SSG`)를 통해 성능 최적화와 `SEO` 향상을 돕는다.
`Next.js`의 주요 특징을 살펴보면

### 1. 서버 사이드 렌더링(`SSR`)

서버 사이드 렌더링(`SSR`, `Server-Side Rendering`)은 클라이언트에서 요청할 때마다 서버에서 `HTML`을 생성하여 반환하는 방식이다.
`Next.js`는 `getServerSideProps` 함수를 통해 `SSR`을 구현할 수 있다.
이 함수는 페이지 요청 시마다 호출되고, 서버에서 필요한 데이터를 가져와서 페이지를 렌더링 한다. 이를 통해 초기 페이지 로딩 속도가 빨라지고, 검색 엔진 크롤러가 서버에서 렌더링된 `HTML을` 수집해서 `SEO`가 향상된다.

### 2. 정적 사이드 렌더링(`SSG`)

정적 사이트 생성(`SSG`,`Static Site Generation`)은 빌드 타임에 `HTML` 파일을 생성하여 `CDN`에 배포하는 방식이다.
`Next.js`는 `getStaticProps`와 `getStaticPaths` 함수를 통해 `SSG`를 구현할 수 있다.
정적 페이지는 요청 시마다 서버에서 생성할 필요가 없기 때문에 매우 빠르게 로드된다.

### 3. 하이브리드 구조

`Next.js`는 `SSR`과 `SSG`를 혼합하여 사용할 수 있는 하이브리드 구조를 지원한다.
예를 들어, 블로그 페이지는 `SSG`로 생성하고, 사용자 대시보드는 `SSR`로 처리할 수 있다.
이를 통해 페이지별로 최적의 렌더링 방식을 선택하여 성능과 사용자 경험을 최적화할 수 있다.

### 4. 간편한 라우팅

`Next.js`는 파일 기반 라우팅을 제공하여 라우트 설정을 간편하게 한다.
`pages`디렉토리 내의 파일이 자동으로 라우트가 되며, 동적 라우팅도 쉽게 구현할 수 있다.

>

-   정적 라우트 : `pages/about.js -> /about`
-   동적 라우트 : `pages/posts/[id].js -> /posts/1, /post/2`

### 5. API 라우트

`Next.js`는 서버리스 함수로 `API`를 구축할 수 있는 `API` 라우트를 제공한다.
`pages/api` 디렉토리에 파일을 생성하여 `API` 엔트 포인트를 설정할 수 있다.

### 6. 퍼포먼스 최적화

`Next.js`는 다양한 퍼포먼스 최적화 기능을 내장하고 있다.
코드 스플리팅, 이미지 최적화, 자동 정적 최적화, Fast Refresh 등의 기능을 통해 더 나은 사용자 경험을 제공한다.

>

-   코드 스플리팅: 각 페이지 별로 코드가 분리되어 필요한 부분만 로드한다.
-   이미지 최적화: `next/image` 컴포넌트를 사용하여 자동으로 이미지 크기 조정 및 포맷 변환을 한다.
-   자동 정적 최적화: 특정 조건을 만족하는 페이지는 자동으로 정적으로 최적화 된다
-   Fast Refresh: 개발 시 코드 변경 시 빠르게 반영된다.

### 7. SEO 향상

`Next.js`는 `SEO` 최적화를 돕는 기능을 제공한다.
`SSR`과 ``SSG를 통해 검색 엔진에 최적화된 `HTML`을 제공하고, `next/head`를 사용하여 메타 태그를 쉽게 설정할 수 있다.

### 결론

`Next.js`는 `React`를 기반으로 하여 서버 사이트 렌더링, 정적 사이트 생성, 간편한 라우팅, API 라우트,
퍼포먼스 최적화, `SEO` 향상 등의 기능을 제공하는 강력한 웹 프레임워크이다.
이를 통해 동적 페이지와 정적 페이지를 함께 사용할 수 있어 유연한 웹 애플리케이션을 구축할 수 있다.

# TASK 2

### Next.js 파일 기반 라우팅 시스템

`Next.js`의 파일 기반 라우팅 시스템은 매우 직관적이로 사용하기 쉽다.
`page`디렉토리 내의 파일 및 디렉토리 구조가 자동으로 `URL`라우트로 매핑된다.
이 시스템을 통해 설정 파일 없이도 라우트를 구성할 수 있으며, 동적 라우팅도 간편하게 구현할 수 있다.

### 1.기본 페이지 라우팅

`pages`디렉토리 내의 각 파일은 자동으로 해당 파일 이름에 매핑되는 경로를 생성한다

>

-   기본 파일 라우팅
    -   `pages/index.js` -> `/`
    -   `pages/about.js` -> `about`
    -   `pages/contact.js` -> `contact`

```jsx
//pages/index.js
export default function Home() {
	return <h1>Home Page</h1>;
}
//pages/about.js
export default function About(){
	return <h1>About Page</h1>;
}
//pages/contact.js
export default function Contact(){
	return <h1>Contact Page</h1>;
}
```

### 2.중첩 라우팅

서브 디렉토리를 사용하여 중첩된 경로를 쉽게 생성할 수 있다.

>

-   중첩 파일 라우팅
    -   `pages/blog/index.js`->`/blog`
    -   `pages/blog/post1.js`-> `/blog/post1`
    -   'pages/blog/post2.js'-> `.blog/post2`

```jsx
// pages/blog/index.js
export default function Blog(){
	return <h1>Blog Home</h1>
}
// pages/blog/post1.js
export default function Post1(){
	return <h1>Blog Post 1</h1>
}
// pages/blog/post2.js
export default function Post2(){
	return <h1>Blog Post 2</h1>
}
```

### 2.동적 라우팅

동적 라우팅을 위해 대괄호 `[]`를 사용하여 파일 이름을 지정한다.
이를 통해 동적인 `URL` 매개변수를 처리할 수 있다.

>

-   동적 라우트
    -   `pages/posts/[id].js` -> `posts/1`,`posts/2`,`posts/abc`등

```jsx
// pages/posts/[id].js
import { useRouter } from "next/router";
export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    return <h1>Post ID: {id}</h1>;
}
```

### 3.다중 동적 세그먼트

다중 동적 세그먼트를 사용하여 보다 복잡한 라우팅 구조를 만들 수 있다.

>

-   다중 동적 세그먼트
    -   `pages/blog/[category]/[postId].js` -> `/blog/tech/1`,`/blog/life/2`

```jsx
// pages.blog/[category]/[postId].js
import { useRouter } from "next/router";
export default function Post() {
    const router = useRouter();
    const { category, postId } = router.query;
    return (
        <div>
            <h1>Category: {category}</h1>
            <h2>Post ID: {postId}</h2>
        </div>
    );
}
```

### 5.캐치 올 라우트

캐치 올 라우트는 특정 경로 이하의 모든 경로를 캡처한다.
`[...]`또는 `[[...]]` 형태로 파일을 지정한다.
`[...param].js`는 매개변수를 필수로, `[[...param]].js`는 선택적으로 처리한다

>

-   캐치 올 라우트
    -   `pages/docs/[...slug].js` -> `/docs/a`,`/docs/a/b`,`/docs/a/b/c`등

```jsx
// pages/docs/[...slug].js
import { useRouter } from "next/router";
export default function Docs() {
    const router = useRouter();
    const { slug } = router.query;
    return <h1>Docs: {slug ? slug.join("/") : "Home"}</h1>;
}
```

### 6.API 라우트

`Next.js`는 `API` 라우트를 통해 서버리스 함수 엔드포인트를 생성할 수 있다.
`pages/api` 디렉토리 내의 파일이 `API` 엔드포인트로 매핑된다.

>

-   API 라우트
    -   `pages/api.hello.js` -> `/api/hello`

```jsx
// pages/api/hello.js
export default function handler(req, res) {
    res.status(200).json({ text: "Hello, world!" });
}
```

### 7.예외 처리

`Next.js`는 기본적으로 `404`페이지와 `500`페이지를 처리할 수 있도록 `pages/404.js`와 `pages/500.js` 파일을 사용할 수 있다

>

-   404 페이지
    -   `pages/404.js` -> 모든 없는 페이지에 대해 `/404`

```jsx
// pages/404.js
export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
}
```

-   500 페이지
    -   `pages/500.js`-> 서버 오류 발생 시 `/500`

```jsx
// pages/500.js
export default function Custom500() {
    return <h1>500 - Server Error</h1>;
}
```

### 결론

`Next.js`의 파일 기반 라우팅 시스템은 디렉토리와 파일 구조를 기반으로 라우트를 자동으로 생성하므로 설정이 간편하다.
정적 페이지, 동적 페이지, 중첩된 라우트, API 엔드포인트 등을 쉽게 구성할 수 있어 강력하면서도 사용하기 쉬운 라우팅 시스템을 제공한다.
이러한 유연성을 통해 다양한 웹 애플리케이션 요구사항을 효과적으로 충족시킬 수 있다.
