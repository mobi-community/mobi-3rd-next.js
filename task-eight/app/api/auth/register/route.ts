import { getUserByEmail } from "@/lib/users";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const { email, password } = await request.json();

    if (!email || !password) {
        return NextResponse.json(
            { error: "email 및 password를 입력해주세요" },
            { status: 400 }
        );
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return NextResponse.json(
            {
                error: "이미 존재하는 email입니다",
            },
            {
                status: 400,
            }
        );
    }
};
