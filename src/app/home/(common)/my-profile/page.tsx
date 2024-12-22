
import React from "react";
import TopNavWrapper from "@/components/TopNavbar/TopNavWrapper";

const MyProfilePage:React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#f6f6f6]">
            <TopNavWrapper />
            <div
                className="w-full px-[10%] pt-[10vh]"
            >
                <div className="">
                    My profile page
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default MyProfilePage;