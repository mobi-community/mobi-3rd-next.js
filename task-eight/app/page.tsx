"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, FormEventHandler } from "react";

const Home = () => {
    const { data: session } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        await signIn("credentials", { redirect: false, email, password });
    };

    return (
        <div>
            {!session ? (
                <>
                    <h1>로그인하세요</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </>
            ) : (
                <>
                    <h1>환영합니다, {session.user?.email}</h1>
                    <button onClick={() => signOut()}>로그아웃</button>
                </>
            )}
        </div>
    );
};

export default Home;
