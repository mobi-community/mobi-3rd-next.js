import Link from "next/link";

const PostLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <nav>
                <Link href={"/post/1"}>Post 1</Link>
                <Link href={"/post/2"}>Post 2</Link>
            </nav>
            {children}
        </div>
    );
};
export default PostLayout;
