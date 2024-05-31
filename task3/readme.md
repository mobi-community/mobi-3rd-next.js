## 🟣 Next JS의 폰트 최적화
- 개인 정보 보호 및 성능 향상을 위해 글꼴을 자동으로 최적화하고 외부 네트워크 요청을 제거한다.
- ```next``` 는 모든 글꼴 파일에 대한 자동 자체 호스팅이 이루어진다. => 레이아웃 변경 없이  웹 글꼴을 최적화 할수 있다는 뜻이다.
- ```next```는 폰트 최적화를 위해 아래와 같은 기능을 제공한다.

### 🔹 구글 폰트 최적화
- ```next/font/google```을 사용하여 Google Fonts를 최적화된 방식으로 불러온다. (**Google의 모든 글꼴을 자동으로 자체 호스팅**)
- 필요 없는 문자 집합을 제외하여 폰트 파일 크기를 줄인다.
- display=swap을 기본으로 사용하여 폰트 로딩 시간을 단축시킨다.
- ```_app.js```파일 아래에 글꼴을 추가하여 사용할 수 있다.

```tsx 
import { Inter } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```



- 배열을 사용하여 여러 폰트 스타일을 지정할 수 있다.

 ```jsx
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
```


### 🔹 로컬 폰트 사용
- ```next/font/local```을 사용하여 로컬에 호스팅된 폰트를 최적화된 방식으로 불러와서 사용할 수 있다.

- 폰트를 분할하여 필요한 부분만 로딩한다.

```jsx
import localFont from 'next/font/local'
 const myFont = localFont({ src: './my-font.woff2' })
 export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )}
  ```



- 공식 홈페이지에 따르면 variable fonts 와 같이 사용하는걸 추천한다고 한다. 
[variable fonts 가 무엇인고? 클릭!](https://fonts.google.com/variablefonts)
- 내가 나중에 볼 용도로 작성하는 ```Tailwind-CSS``` 와 같이 쓰려면 아래와 같이 ```app.js```에 작성한뒤, ```tailwind.config.js```파일에 추가해주면 된다.

```jsx
//app.js
import { Inter } from 'next/font/google'
const inter = Inter({
 subsets: ['latin'],
  variable: '--font-inter',
})
export default function MyApp({   Component, pageProps }) {
  return (
   <main className={`${inter.variable} font-sans`}>
    <Component {...pageProps} />
    </main> )}
```



```tsx
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
```

### 🔹 Zero Layout Shift ?!
- NextJS13에서 새롭게 추가된 기능이다.

- 간단히 설명하자면 폰트는 각각 기본적으로 가지고있는 크기가 있기때문에 서로 다른 폰트를 교체하는 과정에서 ```Layout Shift```가 발생한다.

> #### 🧐 여기서 잠깐?! 
>
>** Layout Shift** (=레이아웃이동) 는 웹 페이지에서 요소들이 갑자기 이동하는 현상을 의미

- Next 12에서는 이에 대해 별다른 처리를 하고 있지 않기 때문에 서로 다른 폰트가 로드되기 전에 기본적으로 보여주는 Font와 로드된 폰트의 크기가 달라 ```Layout Shift``` 현상이 발생한다. 

- ```Next 13```에서는 이를 ```adjustFallbackFont```라는 기능을 통해 웹 폰트가 로드될 때까지 사용하는 폴백(fallback) 폰트의 스타일을 조정하여, 폴백 폰트와 실제 웹 폰트 간의 시각적 차이를 최소화한다.

- 사용방법은 아래 코드와 같다.

 ```tsx
import { GoogleFont } from 'next/font/google';
const roboto = GoogleFont({
  family: 'Roboto',
  subsets: ['latin'],
  adjustFallbackFont: true, // 이 옵션을 활성화
  });
export default function MyApp({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
     <Component {...pageProps} />
     </div>
  );
}
```

- 이렇게 설정하면, Next.js는 폰트 로드 시 폴백 폰트의 스타일을 조정하여 레이아웃 이동을 최소화시킨다.


기존 ```React```에서는 폰트 최적화를 위해 Google Fonts API를 직접 호출하거나 로컬 폰트를 직접 관리해야했다.
=> 추가적인 설정과 코드가 필요해짐!

```Next.js```는 폰트 최적화를 자동으로 수행하여 개발자의 부담을 줄이고, 성능 최적화를 쉽게 구현할 수 있도록 해주는 점이 ```React```와 가장 다른거 아닐까?(물론 폰트 최적화 부분에서 말하는것) 

벨로그에 작성한것 외에도 공식홈페이지에 다양한 방법으로 예시가 구현되어있으니 꼭 꼭 꼭 참조하시길바란다.

[참조: NextJS 공식페이지](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)

## 🟣 Next JS의 이미지 최적화

- 이미지 구성 요소에는 src, width, height및 속성이 필요하다.
```tsx
import Image from 'next/image'
 
export default function Page() {
  return (
    <div>
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}
```

### 🔹 Next/image에서 제공하는 기능
- Next JS에서 제공하는 기능은 다음과 같다.

> - lazy loading
> - 이미지 사이즈 최적화
> - placeholder 제공

#### Lazy loading
- ```lazy loading```는 이미지 로드하는 시점을 필요할 때까지 지연시키는 기술을 의미한다.
- ```Next/Image```를 사용하게 되면 자동으로 lazy loading이 적용된다.
- Image 컴포넌트의 ```priority```라는 prop을 ```true```로 설정하거나, loading prop에 ```“eager” ```값을 설정하여 사용한다.

```tsx
import Image from 'next/image'
 
export default function Page() {
  return (
    <div>
      <Image
        src="/profile.png"//이미지 파일
        width={500}//fill속성 사용시 필수X
        height={500}//fill속성 사용시 필수X
        priority={true}
        alt="Picture of the author" //화면 판독기 및 검색 엔진의 이미지를 설명하는 데 사용 -> 이미지로드 오류 발생시 대체 텍스트
      />
    </div>
  )
}
```
> **fill속성??**
> - 이미지가 상위 요소를 채우도록 하는 ```boolean```이다.
> - ```width ```와 ```height```를 알수 없을때 유용하게 사용된다.
> - 상위 요소는 , 또는 스타일을 할당 해야한다 .```position: "relative"position: "fixed"position: "absolute"```

> **priority속성??**
> - ```true```인 경우 이미지는 높은 우선순위 및 사전 로드 로 간주한다.
> - 콘텐츠가 포함된 최대 페인트(LCP) ```priority``` 로 감지된 모든 이미지에 이 속성을 사용해야한다.
> - 이미지가 스크롤 없이 볼 수 있는 부분 위에 표시되는 경우에만 사용해야한다.
> - 기본값은 ```false``` 이다.

#### 이미지 사이즈 최적화
- Next/Image는 디바이스 크기 별로 srcSet을 미리 지정해두고, 디바이스에 맞는 이미지를 다운로드할 수 있게 지원한다. 
- NEXT.JS는 요청이 들어왔을 때, dist 폴더 밑에 cache/images 폴더에 최적화한 이미지를 동적으로 만들고, 이후에 동일한 요청에 대해서는 이미 만들어 놓은 최적화한 이미지를 캐시로서 재사용한다.

#### placeholder 제공
```tsx
placeholder = 'empty' // "empty" | "blur" | "data:image/..."
```
