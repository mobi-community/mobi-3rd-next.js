export const metadata = {
    title: {
        template: `%s | "Wendyyyyy yeah!"`,
        default: "Wennnndy",
    },
    description: "Hello Wengdi World",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
