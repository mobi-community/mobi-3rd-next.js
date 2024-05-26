import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Loading...",
    },
    description: "The best movis on the best framework",
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            &copy; Next JS is great!
        </div>
    );
}
