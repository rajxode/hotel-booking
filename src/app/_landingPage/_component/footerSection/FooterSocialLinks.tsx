
import React from "react";
import { FaTwitter, FaFacebookF, FaRegCopyright  } from "react-icons/fa";

const FooterSocialLinks = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="w-full bg-black text-white flex justify-center items-cente py-[6vh]">
            <div className="w-4/5 flex justify-between items-center">
                <div className="w-auto h-auto flex justify-start text-[25px]">
                    <FaTwitter />
                    &nbsp;&nbsp;
                    <FaFacebookF />
                </div>
                <div className="w-auto h-auto flex flex-col items-end">
                    <span className="flex justify-center items-center">
                        <span className="mr-1 text-sm">
                            <FaRegCopyright />
                        </span>
                        {year} My hotel booking site
                    </span>
                    <span className="text-sm">
                        India
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FooterSocialLinks;