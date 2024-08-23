
"use client";
import React, { useEffect } from "react";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { authSelector, getMyDataThunk } from "@/redux/reducers/Authentication/authSlice";
import Loader from "@/components/Loader/Loader";

const HomePage:React.FC = () => {

    const dispatch = useAppDispatch();
    const { authLoading, user } = useAppSelector(authSelector);
    useEffect(() => {
        if(!user) {
            dispatch(getMyDataThunk());
        }
    },[user]);

    if(authLoading || !user) {
        return <Loader />
    }

    return (
        <div className="w-full min-h-screen bg-black">
            <TopNavbar />
        </div>
    )
}

export default HomePage;