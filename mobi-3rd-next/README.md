# TSAK 1

## Next.js 똑바로 알기

# 1. Next.js === React(!!?)

-   Next.js는 React를 기반으로 구축된 프레임워크이다.
-   React는 사용자 인터페이스를 구축하기 위한 라이브러리로, UI 컴포넌트를 만드는데 초점을 맞춘다
-   Next.js는 React의 기능을 확장하여 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 파일 기반 라우팅, 이미지 최적화 등 다양한 기능을 제공한다.
-   실제로 많은 기업들이 Next.js의 편의성을 활용하면서도 React의 유사한 문법과 구조를 유지하여 사용한다.
    Next.js에서 작성하는 코드는 대부분 React 코드와 유사하게 생겼다.

# 2. Server-Side Rendering(SSR), Client- Side Rendering(CSR)

> **CSR (Client Side Rendering)**:
> React는 주로 CSR 방식으로 동작한다. 이는 초기 HTML이 서버에서 최소한으로 전달되고, 나머지 페이지 내용은 브라우저에서 JavaScript를 통해 렌더링된다.
> **장점**: 클라이언트에서 동적으로 빠르게 페이지를 업데이트할 수 있다. 사용자 경험이 향상되며, SPA(Single Page Application) 구축에 적합하다.
> **단점**: 초기 로딩 속도가 느릴 수 있고, SEO 최적화가 어렵다.

> **SSR (Server Side Rendering)**:
> Next.js는 SSR을 지원한다. 서버에서 HTML을 완전히 렌더링한 후 클라이언트에 전달한다.
> **장점**: 초기 로딩 속도가 빠르고, SEO 최적화가 용이하다. 사용자에게 더 빠른 첫 화면을 제공할 수 있다.
> **단점**: 서버 부하가 증가할 수 있으며, 서버와 클라이언트 간의 동기화가 필요하다.

# 3. Convenience

> **파일 기반 라우팅 시스템**:
> React에서는 라우팅을 위해 react-router와 같은 별도의 라이브러리를 사용해야 한다.
> Next.js는 파일 기반 라우팅을 제공하여, pages 디렉토리 내의 파일 구조만으로 자동으로 라우팅을 설정할 수 있다.
> 이는 설정을 간소화하고 개발 속도를 높인다.

> **이미지 및 폰트 최적화**:
> Next.js는 next/image 컴포넌트를 통해 이미지 최적화를 자동으로 지원한다.
> 이는 다양한 해상도와 형식에 맞춰 이미지를 최적화하여 성능을 향상시킨다.
> 폰트 최적화도 자동으로 지원되어, 사용자 경험과 웹사이트 성능을 개선한다.

# 4. Full Stack Framework

-   React는 프론트엔드 라이브러리로, 주로 클라이언트 측 UI 개발에 사용된다.
-   Next.js는 풀스택 프레임워크로, 프론트엔드와 백엔드 모두 사용가능하다.
    -   **API Routes**:
        Next.js는 `pages/api` 디렉토리 내에 API 라우트를 정의할 수 있다.
        이를 통해 서버리스 함수나 간단한 백엔드 로직을 쉽게 구현할 수 있다
    -   **서버 사이드 기능**:
        Next.js는 `getServerSideProps`,`getStaticProps`등을 통해 서버에서 데이터를 가져와 페이지를 생성하는 기능을 지원한다.

## 결론

React는 UI 컴포넌트를 구축하는 데 강력한 도구이며, 주로 CSR을 위해 사용된다.
Next.js는 React를 기반으로 한 풀스택 프레임워크로, SSR, 파일 기반 라우팅, 이미지 최적화, API 라우트 등 다양한 기능을 제공한다.
두 도구 모두 모던 웹 개발에 필수적이고, 프로젝트의 요구 사항에 따라 적절하게 선택하여 사용할 수 있다.
Next.js는 프론트엔드와 백엔드를 모두 다루는 풀스택 애플리케이션을 쉽게 구축할 수 있는 강력한 도구이다.

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

# TASK 3

### Next.js의 폰트와 이미지 최적화

`Next.js`는 폰트 최적화를 위해 `Google Fonts`와 같은 외부 폰트를 손쉽게 불러오고, 최적화할 수 있는 도구를 제공한다.
`Next.js`13부터 도입된 `next/font` 패키지를 사용하면, 로드 타임을 줄이고 `CLS(Cumulative Layout Shift)`를 최소화할 수 있다.

## 1.폰트 최적화

### Google Fonts 사용하기

`Next.js`13에서는 `next/font/google`패키지를 통해 `Google Fonts`를 쉽게 사용할 수 있다.

```jsx
// pages/_app.js
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latuin"],
    display: "swap",
});
function MyApp({ Component, pageProps }) {
    return (
        <div className={inter.calssName}>
            <Component {...pageProps} />
        </div>
    );
}
export default MyApp;
```

-   `subsets`: 필요한 글리프 하위 집합만 로드하여 폰트 파일 크기를 줄인다.
-   `display`: `swap`값을 사용하여 `FOUT(Flash of Unstyled Text)` 현상을 방지한다.

### 로컬 폰트 사용하기

로컬 폰트를 사용하는 경우, `next/font/local` 패키지를 사용하여 폰트를 불러올 수 있다.

```jsx
// pages/_app.js
import localFont from "next/font/local";
const myFont = localFont({
    src: "../public/fonts/MyFont.woff2",
    display: "swap",
});
function MyApp({ component, pageProps }) {
    return (
        <div className={myFont.className}>
            <Component {...pageProps} />
        </div>
    );
}
export default MyApp;
```

## 2.이미지 최적화

`Next.js`는 `next/image`컴포넌트를 통해 이미지 최적화 기능을 제공한다.
이 컴포넌트는 이미지의 크기를 자동을 조절하고, 적절한 포맷으로 변환하여 최적의 성능을 유지한다.
또한, 레이지 로딩과 같은 추가적인 최적화 기능도 지원한다.

### 기본 사용법

-   `next/image` 컴포넌트를 사용하여 이미지를 최적화할 수 있다.

```jsx
import Image from "next/image";
function HomePage() {
    return (
        <div>
            <Image
                src="/images/my-image.jpg"
                alt="My Image"
                width={500}
                height={300}
                layout="responsive"
            />
        </div>
    );
}
export default HomPage;
```

-   `src`: 이미지 소스 `URL`
-   `alt`: 이미지 대체 텍스트
-   `width`: 이미지 고유 너비
-   `height`: 이미지의 고유 높이
-   `layout`: `fixed`,`intrinsic`,`responsive`,`fill`중 하나를 선택하여 레이아웃을 결정한다

### 레이지 로딩

`next/image`컴포넌트는 기본적으로 레이지 로딩을 지원하여 페이지 로딩 성능을 최적화 한다.
화면에 보이지 않는 이미지는 필요할 때 로드된다.

### 자동 포맷 변환

`Next.js`는 `WebP`와 같은 최신 이미지 포맷으로 자동 변환하여 이미지 파일 크기를 줄이고, 로딩 속도를 향상시킨다.
이는 브라우저 호환성에 따라 자동으로 적용된다

### 이미지 크기 조절

`next/image`는 다양한 크기로 이미지로 제공하여, 필요에 따라 적절한 크기의 이미지를 로드한다.
이를 통해 화면 크기에 맞는 최적화된 이미지를 제공한다

```jsx
import Image from "next/image";
function HomePage() {
    return (
        <div>
            <Image
                src="/images/my-image.jpg"
                alt="My Image"
                sizes="(max-width: 600px) 100vw, 50vw"
                width={800}
                height={600}
            />
        </div>
    );
}
export default HomePage;
```

-   `size`: 미디어 쿼리를 사용하여 브라우저가 적절한 이미지 크기를 선택할 수 있도록 도와준다

### 외부 이미지 사용

외부 도메인의 임지를 사용할 경우, `next.config.js`파일에 도메인을 추가해야 한다.

```jsx
// next.config.js
module.exports = {
    images: {
        domains: ["example.com"],
    },
};
```

```jsx
import Image from "next/image";

function HomePage() {
    return (
        <div>
            <Image
                src="https://example.com/images/my-image.jpg"
                alt="External Image"
                width={500}
                height={300}
            />
        </div>
    );
}

export default HomePage;
```

### 결론

`Next.js`는 폰트와 이미지 최적화를 위한 가력한 도구와 기능을 제공하여 웹 애플리케이션의 성능을 크게 향상시킬 수 있다.
`next/font`패키지를 통해 폰트를 최적화하고, `next/image` 컴포넌트를 사용하여 이미지를 최적화함으로써 더 빠르고 사용자 친화적인 웹사이트를 만들수 있다.

# TASK 4

### 서버 사이드 렌더링

`SSR`, `Server-Side Rendering`은 웹 애플리케이션을 사용자 브라우저에서 실행하기 전에 서버에서 HTML을 생성하는 방식이다.
사용자에게 완전히 렌더링된 HTML 페이지를 제공한다.
`SSR`은 전통적인 웹 애플리케이션에서 많이 사용되었으며, 최근에는 `React`,`Vue.js`같은 프론트엔드 프레임워크에서도 활용되고있다

### 서버 사이드 렌더링의 동작 방식

1. **클라이언트 요청**: 사용자가 웹 브라우저에서 웹페이지를 요청, 브라우저는 URL을 통해 HTTP요청을 보낸다.
2. **서버 처리**: 서버는 요청을 받고 필요한 데이터를 데이터베이스나 다른 API로 부터 가져온다. 이 데이터를 바탕으로 HTML 페이지를 생성.
3. **HTML 생성 및 전송**: 서버는 데이터와 템플릿을 결합하여 최종 HTML을 생성. 생성된 HTML은 사용자 브라우저로 전송된다
4. **브라우저 렌더링**: 브라우저는 서버로부터 받은 HTML을 렌더링하여 사용자에게 완성된 페이지를 보여준다.

### 장점

1. **SEO(검색 엔진 최적화)**: 검색 엔진 크롤러는 JavaScript를 실행하지 않고 HTML만 분석하는 경우가 많다.
   SSR을 사용하면 완성된 HTML을 제공하기 때문에 SEO에 유리하다.
2. **빠른 초기 로딩**: 서버에서 HTML을 생성하여 보내기 때문에 브라우저에서 초기 로딩 속도가 빠르다. 이는 사용자 경험을 개선하는 데 좋다.
3. **구형 브라우저 지원**: JavaScript 기능이 제한적인 구형 브라우저에서도 SSR을 통해 완전한 페이지를 제공할 수 있다.

### 단점

1. **서버 부하 증가**: 서버에서 모든 요청마다 HTML을 생성하기 때문에 서버의 부하가 증가할 수 있다.
2. **복잡성 증가**: 클라이언트와 서버 모두에서 렌더링 로직을 유지해야 하므로 코드베이스가 복잡해질 수 있다.
3. **인터랙티브 기능 구현의 어려움**: 클라이언트 사이드에서의 동적인 인터랙션은 추가적인 JavaScript 코드가 필요하다.

### 서버 사이드 렌더링과 클라이언트 사이드 렌더링 비교

-   **클라이언트 사이드 렌더링(CSR)**: JavaScript 프레임워크(React, Vue.js등)가 클라이언트에서 실행되어 필요한 데이터를 API로부터 가져와서 렌더링 한다.
    초기 로딩은 느릴 수 있지만, 이후 페이지 전환이 빠르다.
-   **서버 사이드 렌더링(SSR)**: 초기 로딩은 빠르지만, 모든 페이지 요청마다 서버가 HTML을 생성해야 하므로 서버 부하가 늘어날 수 있다.

### 결론

SSR은 초기 로딩 속도와 SEO를 개선하기 좋지만, 서버 부하와 코드 복잡성들을 고려하여 적절하게 사용하는 것이 중요하다.
