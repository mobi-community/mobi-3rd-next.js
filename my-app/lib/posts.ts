import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml?: string;
}

/**
 * 모든 data를 정렬된 순서로 가져옴
 */
export function getSortedPostsData(): PostData[] {
    // "posts" 디렉토리 내의 모든 파일 이름 읽기
    const fileNames = fs.readdirSync(postsDirectory);
    // 모든 파일을 map으로 data 생성
    const allPostsData = fileNames.map((fileName) => {
        // ".md" 를 제거하여 ID생성
        const id = fileName.replace(/\.md$/, "");
        // 파일 전체 경로 생성
        const fullPath = path.join(postsDirectory, fileName);
        // 파일 내용 읽기
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // 프론트 메터를 파싱
        const matterResult = matter(fileContents);

        // ID의 프론트 메터 데이터를 포함하는 객체 반환
        return {
            id,
            ...matterResult.data,
        } as PostData;
    });

    // 날짜 기준으로 정렬
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
