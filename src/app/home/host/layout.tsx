
import React from "react";
import TopNavWrapper from "@/components/TopNavbar/TopNavWrapper";

export default function HostLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <TopNavWrapper />
            {children}
        </>
    )
}