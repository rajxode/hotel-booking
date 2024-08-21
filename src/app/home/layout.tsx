
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Home | Hotel Booking",
    description: "Homepage of Hotel booking website"
};

export default function HomeLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            {children}
        </>
    )
}