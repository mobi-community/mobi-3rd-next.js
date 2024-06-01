import { getUserByEmail, verifyPassword } from "@/lib/users";
import { AuthOptions } from "next-auth";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Eamil", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials.password) {
                    throw new Error("email, password required");
                }

                const user = await getUserByEmail(credentials.email);

                if (!user) {
                    throw new Error("존재하지 않는 email입니다.");
                }

                const isValid = await verifyPassword(
                    credentials.email,
                    credentials.password
                );

                if (!isValid) {
                    throw new Error("비밀번호 틀림");
                }

                return { id: user.email, email: user.email };
            },
        }),
    ],
    secret: process.env.SECRET!,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({
            token,
            user,
        }: {
            token: JWT;
            user?: { id: string; email: string };
        }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async ({
            session,
            token,
        }: {
            session: Session;
            token: JWT;
        }) => {
            if (token) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
