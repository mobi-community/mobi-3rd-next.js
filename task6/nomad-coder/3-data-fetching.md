# section 3 - Data Fetching

## client component 로 데이터 패칭
- 일반적인 react application 에서 패칭했던 방법을 쓰면된다.
  - 단, "use client" 선언

### 단점
- 상태 관리가 필요하므로, hydration 대상이다.
  - javascript 파일을 전송해야한다.(비효율적.. 👎)
- 브라우저는 client 컴포넌트를 받기위한 통신과 데이터 패칭 통신, 2번 한다. 
  - 역시 비효율적이다. 👎
- 로딩에 대한 상태 또한 관리해야한다.

## server component 로 데이터 패칭
- 서버에서 데이터를 패칭받아, html 로 변환 후 한번에 브라우저로 넘겨준다. 👍
- 한번 호출한 api 의 응답에 대해 자동으로 캐싱된다.
  - 항상 최신의 데이터를 가지고 있는다.
- 데이터를 로딩 중인지, 완료 중인지에 대해 client 는 관리하지 않아도 된다.

### 단점
- next 에서 데이터 패칭이 늦어질 경우, 브라우저는 해당 페이지로의 접근이 불가하다.
  - html 전송을 아예 안해준다;;
  
### loading component
- 로딩 중임을 알려주는 컴포넌트를 client 에게 미리 전송하여, 위의 단점을 제거할 수 있다.
- 현재 render 되어야 하는 `page` 파일 근처에 `loading` 이름으로 파일은 만들어 선언해야한다.
- next 에서 데이터 패칭이 완료되기 전까지, 현재 출력가능한 컴포넌트를 우선하여 client 에 보내준다.
  - 현재 출력가능한 컴포넌트란? layout component, loading component 등..

## 한 페이지 내에서 다른 데이터를 각각 호출해야 할 경우,

### case1) 순차적으로 호출
```tsx
const fetchFunc1 = async (....) => {....}
const fetchFunc2 = async (....) => {....}

const Page = async () => {
  const data1 = await fetchFunc1()
  const data2 = await fetchFunc2()
  ....
}
```

- `fetchFunc1` 이 완료된 후, `fetchFunc2` 이 실행된다.
- 데이터를 받아오는 여러 함수 중, 하나만 늦어져도 브라우저는 로딩 컴포넌트만 출력한다. 비효율적 👎👎

### case2) Promise.all([....])
```tsx
const fetchFunc1 = async (....) => {....}
const fetchFunc2 = async (....) => {....}

const Page = async () => {
  const [data1,data2] = await Promise.all([fetchFunc1(), fetchFunc2()])
  ....
}
```
- 두 요청을 일시에 보낼 수 있어, case1 보다 효율적이다.
- 그러나, case1 과 마찬가지로 하나만 늦어도 해당 페이지는 로딩 컴포넌트를 출력한다.. 👎

### case2) 컴포넌트 분리 & Suspense
```tsx
const fetchFunc1 = async (....) => {....}
const fetchFunc2 = async (....) => {....}

const Page = async () => {
  const [data1,data2] = await Promise.all([fetchFunc1(), fetchFunc2()])
  ....
}
```
- 두 요청을 일시에 보낼 수 있다.
  - 다른 요청이 완료되기를 기다리지 않아도, 자신의 요청을 보낸다. 👍
- 그러나, case1 과 마찬가지로 하나만 늦어도 해당 페이지는 로딩 컴포넌트를 출력한다.. 👎


### case2) 컴포넌트 분리 & Suspense
```tsx

const Page = async () => {
  return (
    <Suspense fallback={<Fallback1/>}>
      <FetchingComponent1/>
    </Suspense>
    <Suspense fallback={<Fallback2/>}>
      <FetchingComponent2/>
    </Suspense>
  )
}
```
- suspense 는 react 의 컴포넌트이다.
- 일단, `Page` 는 await 구문이 없으므로 브라우저 로딩이 없다.
- `FetchingComponent1`,`FetchingComponent2` 각각 요청을 보내고 완료되는 대로, 데이터를 출력한다. 
  - 요청이 시작과 끝이 완전히 독립적이다. 👍👍
  - 요청이 완료되지 않은 컴포넌트만 지정된 fallback ui 가 브라우저로 전송된다.  


## error component
- `error` 라는 파일을 생성해두면 error 가 throw 되었을 때, 해당 파일에서 정의된 컴포넌트가 브라우저로 전송된다.