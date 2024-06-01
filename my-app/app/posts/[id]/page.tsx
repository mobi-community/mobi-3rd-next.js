// app/posts/[id]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostData } from "../../../lib/posts";

// 게시물이 저장된 디텍토리 정의하기
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * 주어진 ID를 기반으로 data를 가져온다
 * @param id - 게시물 식별
 */
async function getPostData(id: string): Promise<PostData> {
    // 마크다운 파일의 전체 경로 생성
    const fullPath = path.join(postsDirectory, `${id}.md`);
    // 마크다운 파일 내용 읽기
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // 마크다운 팡리에서 프론트 메터를 파싱
    const matterResult = matter(fileContents);

    // 마크다운 content를 HTML로 처리
    const processedContent = await remark()
        .use(html) // remark-html을 사용하여 마크다운을 HTML로 변환하기
        .process(matterResult.content);
    // 문자열로 변환
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
