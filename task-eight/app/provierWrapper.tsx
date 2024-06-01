"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderWrapperProps {
    children: ReactNode;
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default ProviderWrapper;
