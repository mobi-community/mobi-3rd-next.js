// "use client";

import ClientComponent from "./_component/client-component";

type Params = {
  params: { id: string };
};

export default function PostDetail({ params }: Params) {
  // 주의사항: Next-js는 server side rendering이 default value입니다.
  // 따라서 console을 찍으면 아직 사용자 화면에 랜더링이 되기 이전이기 때문에 터미널에서 콘솔을 확인할 수 있어요!
  console.log(params.id);

  // 주의사항: hooks 함수는 client component에서만 사용이 가능해요!
  // 따라서 훅함수를 사용해야한다면 상단에 'use client'를 작성 해줘야해요 :)
  // use client는 default로 설정된 SSR을 사용하지 않고 client side에서 rendering을 활용할 수 있도록 해주는 도구에요

  // 하지만 만약에!!
  // SSR을 유지하면서 hooks 관련된 함수를 써야한다면 어떻게 해야할까요!?

  // 바로 component로 구분하는거에요 :)

  // 각각 생성된 컴포넌트에  use client를 사용하시면 해당 부분에 대한 랜더링은 ssr에서 제외됩니다.
  // <ClientComponent/>를 확인해보세요

  // 따라서 ssr을 하면서도 hook 함수에 대한 사용이 자유로워질 수 있어요!
  // 단 그만큼 리엑트 보다는 컴포넌트를 나누는 것에 주의를 기울여야겠죠!

  return (
    <div>
      {params.id}
      <ClientComponent />
    </div>
  );
}
