
"use client";
import React, { useEffect } from "react";
import LandingPage from "@/app/_landingPage/LandingPage";
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
        <LandingPage />
    )
}

export default HomePage;