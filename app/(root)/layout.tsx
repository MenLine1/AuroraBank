import React from "react";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            SIDEBAR
            {children}
        </main>
    );
}