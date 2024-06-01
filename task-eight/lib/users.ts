import path from "path";
import fs from "fs";
import { compare, hash } from "bcryptjs";

const userFilePath = path.join(process.cwd(), "users.json");

type User = {
    email: string;
    password: string;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
    return users.find((user: User) => user.email === email) || null;
};

export const createUser = async (
    email: string,
    password: string
): Promise<void> => {
    const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
    const hashedPassword = await hash(password, 10);
    users.push({ email, password: { hashedPassword } });
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
};

export const verifyPassword = async (
    email: string,
    password: string
): Promise<boolean> => {
    const user = await getUserByEmail(email);
    if (!user) return false;
    return await compare(password, user.password);
};
