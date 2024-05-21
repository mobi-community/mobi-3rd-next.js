# section 1 - Introduction

## Library vs FrameWork

### Library
  - 개발자 주도
  - 개발자에 의해 필요한 {모듈 or 코드} 를 import & 조합
  - React 는 라이브러리

### FrameWork
  - 시스템 주도
  - 개발자는 프레임워크가 제시한 위치, 형식에 맞게 코드를 작성
  - 런타임 시, 프레임워크가 코드를 호출하여 사용
  - Next 는 프레임워크

<br/>
<br/>

## NextJs 프로젝트 수동 설치

- ① `npm install -y` : package.json 설치

- ② 필수 패키지 설치
    - `npm i next@latest`
    - `npm i react@latest`
    - `npm i react-dom@latest`

- ③ package.json 에 script 추가

    - 👇 이렇게 하면 `npm run zzz` 입력 시, `next dev` 가 호출된다.
```json
{
  ...
  "scripts": {
    "zzz": "next dev" // "zzz" 는 아무거로나 변경해도 된다. 
  },
  ...
}
```


- ④ 명령어가 호출되면, 프레임워크는 "app" 폴더 의 "page.tsx" or "page.jsx" 를 찾아간다.
    - 폴더 이름은 톳시하나 안틀리고 **"app"** 로 해야한다.
    - 파일 이름은 톳시하나 안틀리고 **"page "** 로 해야한다.