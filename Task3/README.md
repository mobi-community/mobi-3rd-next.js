# Next Image

next 13버전 부터는 이미지 최적화를 지원해준다. 바로 `<Image/> from next/image` 로부터 받아서 사용가능하다.

## Image 컴포넌트의 기능 3가지

> - 1. lazy loading
> - 2. 이미지 사이즈 최적화
> - 3. placeholder 제공

### 1 . lazy loading

기존 image를 로드할때 화면에서 바로보여지지 않는 image의 로딩은 지연시키고 필요한 부분만을 먼저로드해서 필요한 이미지를 빠르게 보여주기 위한 기술이다.

next 13버전부터는 자동으로 lazy loading을 지원해주고 특정 props를통해 이를 무효화시키는 것도가능하다.

`priority = true`를 사용하거나 `loading = eager`를 사용하면 즉시 이미지를 로드할 수 있는데 전자가 더 권장되는 방식이라고 한다.<br/>
_(priority는 boolean 값이기때문에 priority를 적으면 true 이고 적지않으면 false)_

### 2 . 이미지 사이즈 최적화

nextjs에서는 이미지파일을 로드할때 nextJS서버에서 이미지최적화를 해서 브라우저로 보내준다.
이때 webp형식의 파일로 변형을 해주고, 한번로딩된 이미지는 캐싱되어 캐싱만료 전까지는 저장된 이미지를 보여주기때문에 첫로드 후에는 더빠르게 화면에 보여준다.

또한 화면의 사이즈가 달라지면 `next.config.js`에서 설정된 `srcSet(source set)`에 맞는 사이즈로 최적화를 해서 보여준다.
srcSet은 next.config.js에 설정된 images.imageSize, images.deviceSize에 의해 결정되고 별도의 설정이 없다면 default값을 가지고 이에 맞게 화면에 보여준다.
모든 image사이즈에 맞는 srcSet을 가지게됨으로 너무많은 srcSet이 싫다면 confing에서 설정해주면된다.

### 3 . placeholder 제공

기존 image를 로드할때는 image의 크기가 정해지지 않았다면 해당 영역의 크기가 0 이기때문에 layout-shift가 발생했다. 이때문에 core-web-vital의 지표인 CLS에 악영향을 미쳤는데
next에서는 placeholder를 제공하기때문에 layout-shift가 발생하지 않는다.

단! 이미지가 정적으로 생성될 경우는 `placeholder = blur`처리만 해줘도 자동으로 placeholder를 제공해주지만 이미지를 외부 도메인이나 public폴더에서 동적으로 가져오는 경우에는 base64 로 인코딩된 data url을 blurDataUrl 에 직접 작성해줘야 한다.

이경우에 사용할 blurDataUrl을 생성하기위해 공식문서에서는 `plaiceholder`라이브러리를 사용할 것을 권장한다.

## 사용가능한 옵션

### 로컬 이미지

정적으로 생성되는 로컬 이미지의 경우 `width,height`를 import된 이미지를 기준으로 자동으로 크기를 생성해주고 `placeholder=blur`또한 그냥 사용가능하다.

### 외부 이미지

외부 이미지의 경우 `width,height`를 명시해줘야하고, `placeholder=blur`를 사용하기 위해서는 별도의 라이브러리나 blurDataUrl을 직접 작성해줘야한다.
또한 반응형을 마다 최적화된 사이즈의 이미지를 로드하려면 `next.config.js`에서 srcSet을 설정해서 최적화를 진행하면 좋다.

### layout

> `intrinsic(default), fixed, fill, responsive` 네가지 옵션을 사용가능

- intrinsic(default): 컨테이너 사이즈가 이미지 사이즈보다 작아졋을때 이미지를 컨테이너에 맞게 줄임*(단! 원본비율을 유지한채 사이즈가 변한다.)*
- fixed : 이미지 크기를 width,heigth사이즈로 고정(컨테이너 사이즈상관없이)
- responsive : 컨테이너 크기에 따라 이미지 비율을 유지하며 사이즈가 변함*(컨테이너가 display : block 이어야함)*
- fill : `relative`속성을 가진 조상의 크기에 맞게 조정한다. 주로 object-fit속성과 함께 사용됨._(조상에게 position : relative속성이 꼭 필요하다 )_

### next.config.js

next.config.js에서 다양한 옵션들을 컨트롤 할 수 있다.

## 조금더 알아보기

### 1 . 이미지 최적화 시점과 이미지 재사용

nextjs는 브라우저에서 요청이 들어왔을때 `dist>cache/image`폴더에 최적화된 이미지를 동적으로 생성한다. 이 후 동일한 요청에 대해서는 캐싱된 이미지를 제공한다.

따라서 요청전에는 `dist>cache/image` 경로에서 확인하면 이미지가 없지만 요청후에 이미지가 생성된다.

최적화된 이미지를 사용했는지의 여부는 nextjs에서 전달하는 응답헤더에서 확인가능하다.
이미지가 캐싱되지 않았다면 X-Nextjs-Cache헤더에 `MISS` 캐싱됐다면 `HIT`를 응답으로 전달해주기 때문에 이값으로 캐싱된 이미지인지 판단이 가능하다.

### 2 . 모든 이미지를 최적화 하는가?

동적으로 이미지를 최적화해야하기 때문에 `SVG, vector, gif`와 같이 상대적으로 복잡하거나 최적화가 오래걸리는 애니메이션 이미지의 경우는 최적화를 진행하지않고 바로 응담을 내려주도록 설정되어있다고 한다.

# Next Font

이전에 font를 로드하는 방식은 외부폰트를 사용할 경우 font를 로드하기전에 fallback폰트를 보여주고 그후에 font를 로드하기때문에 layout-shift가 발생했다.

## Next 13버전에서는?

13버전 부터는 `adjustFallbackFont`라는 기능을 통해 FallbackFont의 size-adjust속성을 조절해 fallback폰트와 로딩된 폰트의 사이즈크기차이를 없에고 이를 통해 layout-shift를 막아준다.

13버전 부터는 `@next.font`패키지를 제공해준다. 이를 통해 내장된 구글 폰트들을 사용가능하게 해준다.이를 통해 기존에 html을 로드후 Link된 폰트를 다운로드하여 사용자들에게 보여준 반면 13버전 부터는 빌드시에 미리 구글 폰트를 로드하여 html이 해당 폰트를 link하도록 동작시킨다.

## 사용법?

프로젝트에 일관된 폰트를 적용하기위해서 root에 있는 layout에 한번에 폰트를 적용 할 수 있다. 또한 `@next/font` 뿐만 아니라 로컬 폰트또한 layout에 적용가능하다.
