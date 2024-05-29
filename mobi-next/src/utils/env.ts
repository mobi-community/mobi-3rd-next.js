export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

if (!API_URL) {
    throw new Error("환경변수 없음.");
}
