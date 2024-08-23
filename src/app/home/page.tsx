
"use client";
import React from "react";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { useAppSelector } from "@/redux/reduxHooks";
import { authSelector } from "@/redux/reducers/Authentication/authSlice";
import Loader from "@/components/Loader/Loader";

const HomePage:React.FC = () => {
    const { authLoading } = useAppSelector(authSelector);

    if(authLoading) {
        return <Loader />
    }

    return (
        <div className="w-full min-h-screen bg-black">
            <TopNavbar />
        </div>
    )
}

export default HomePage;