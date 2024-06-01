# Mobi-3rd-next.js

## 프로젝트 개요

- Task1 ~ Task8을 학습하며 SSR방식을 사용하는 프레임워크`Nextjs`에 대해 학습합니다.

## 프로젝트 기간

- 2024.05.20 ~ 2024.06.01

## TASK.1 NextJS 똑바로 알기

### 👍next와 react의 차이점은?

- Task1 에서는 next와 react의 차이점인 `랜더링 방식(ssr vs csr)`을 중심으로 장단점을 비교해봤습니다.
  > 1.속도 2.로드방식 3.비용 4.SEO 5.어떤 프로젝트에 사용하면 좋은지?

### 📃Task1 Link주소 : [next와 react의 차이점 알아보기](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/Task1)

## TASK.2 NextJS 파일 [라우트] 시스템 알아보기

### 👍파일 라우트 시스템에 대한 이해

- react는 라이브러리기때문에 routing또한 직접 설정해야 했습니다.
- 반면 next에서는 app || page 폴더 아래에`폴더생성 & page.tsx`를 배치하는 것만으로 라우팅을 지원해주는데 이에대한 사용방법을 알아봅시다.

### 👍`use client`를 사용해하하는 이유

- `useRouter` 혹은 `useSearchParams` 를 next에서 사용하기 위해서는 해당컴포넌트에 `use client` keyword를 입력해야 사용가능합니다.
- 이를 이해하기 위해서는 nextjs에서 server component와 client component가 무엇인지 이해야하고 랜더링 과정또한 이해해야합니다.

### 📃Task2 Link주소 : [파일 라우트시스템 적용하기](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/Task2)

## TASK.3 NextJS의 폰트와 이미지 최적화

### 👍 Font 와 Image의 최적화지원

- react프로젝트에서는 외부 font를 사용하거나 image를 로드할때 `최적화`라는 것을 고려해야했습니다.
  - 그 이유는 CLS(로딩시점에 따른 layout의 변화)을 높혀야 core web vitals 를 향상시킬수 있기때문
- Next13버전 부터는 개발자들에게 이런점을 고려하지않아도 스스로 최적화를 해주는 Image,font로딩 방식을 지원해줍니다.
- Task3에서는 최적화라는 관점에서 어떻게 동작하고 어떤점이 효과적인지 정리했습니다.

### 📃Task3 Link주소 : [nextjs에서 font,image의 최적화지원](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/Task3)

## TASK.4 서버 사이드 랜더링

### 👍알아본내용

- 미해결... 아직못했습니다. 일요일날 꼭 해보겠습니다.!

### 📃Task4 Link주소 :[]()

## TASK.5 NextJS 12와 13의 차이

### 👍알아본내용

- 미해결... 아직못했습니다. 일요일날 꼭 해보겠습니다.!

### 📃Task5 Link주소 :[]()

## TASK.6 NextJS 공식 문서와 무료 강의로 러닝하기

### 👍 Nomad 강의 후기

- 무료강의를 통해 nextjs의 아키텍처에 대해 배웠습니다.
- 라이브러리인 react와 프레임워크인 nextjs가 어떤점이 다른지 배웠습니다.
- ssr 방식의 nextjs로 프로젝트를 생성하는 과정을 배웠습니다.
  _(강의를 듣고 따로정리를 안해서 생각나는 부분들만 README.md에 작성했습니다..)_

### 📃Task6 Link주소 :[app router](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/nomad)

### 📃Task6 Link주소 :[page router](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/nextjs-nomad)

## TASK.7 Mark-down을 활용한 나만의 블로그 호스팅하기

### 👍 사용 라이브러리

- [velite](https://velite.js.org/)
- [tailwind-typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [shadcn](https://ui.shadcn.com/)

### 👍 nextjs를 활용한 blog구현

- 마크다운 언어로된 mdx파일을 읽어오는 라이브러리 Velite를 사용해서 나만의 블로그를 만들었습니다.

### 📃Task7 Link주소 :[Chan's Log](https://github.com/mobi-community/mobi-3rd-next.js/tree/Pair1-Chan/blog)

## TASK.8 next-auth를 사용하여 로그인 구현하기

### 👍알아본내용

- 미해결... 아직못했습니다. 일요일날 꼭 해보겠습니다.!

### 📃Task8 Link주소 :[]()

## 회고

react를 사용할땐 csr이 무엇이고 라이브러리와 프레임워크의 차이를 이해하지 못했습니다.
이번 task를 진행하면서 csr, ssr의 개념을 확실하게 알게됬습니다.<br><br>
이전 task들을 진행하며 사실 core web vtial, ssr,csr 과같은 개념적인 내용을 어떻게 이해해야
하고 내 프로젝트에서 고려해야 하는지 이해하지 못했었는데 react와 nextjs의 차이를 이해하면서 지금까지 배웠던 것들이 다 필요한 내용이었고 어떻게 적용되는지 알게되서 좋았습니다.<br><br>
이를 바탕으로 프로젝트의 목적에맞는 랜더링방식을 고려해서 프로젝트설계를 할 수 있을것 같습니다.

task를 다끝내지 못해서 아쉽습니다... 재밌는 내용들인데 본격적으로 프로젝트에 들어가기전에 꼭 다해보겠습니다.
