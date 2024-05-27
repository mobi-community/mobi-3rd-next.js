import Link from "next/link";
import { useRouter } from "next/navigation";

const Main = () => {
    // const router = useRouter();
    // const onMoveProfile = () => {
    //     router.push("/profile");
    // };
    return (
        <>
            <h1>MainPage</h1>
            <form action="/profile/1234" method="get">
                <button type="submit">Profile 바로 가기</button>
            </form>
            <Link href={"/post/1234"}>post 바로가기</Link>
        </>
    );
};
export default Main;
