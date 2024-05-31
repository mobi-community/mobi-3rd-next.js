// app/posts/[id]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostData } from "../../../lib/posts";

const postsDirectory = path.join(process.cwd(), "posts");

async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    } as PostData;
}

const Post = async ({ params }: { params: { id: string } }) => {
    const postData = await getPostData(params.id);

    return (
        <div>
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
        </div>
    );
};

export default Post;
