import Link from "next/link";

export default function Navigation() {
  // _을 사용하면 주소에 포함되지 않는 파일로 만들 수 있어요..!
  return (
    <div>
      <div>
        <Link href={"/post"}>POST</Link>
      </div>
      <div>
        <Link href={"/post/32"}>POST-DETAIL</Link>
      </div>
    </div>
  );
}
