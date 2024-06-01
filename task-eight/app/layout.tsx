// app/layout.tsx
import { ReactNode } from "react";
import ProviderWrapper from "./provierWrapper";

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <ProviderWrapper>{children}</ProviderWrapper>
            </body>
        </html>
    );
}
