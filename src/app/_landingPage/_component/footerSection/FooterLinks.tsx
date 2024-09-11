
import React from "react";
import { footerDataArray } from "@/utils/constantData/footerData";

const FooterLinks = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-4/5 h-auto">
                {
                    footerDataArray.map((data,i) => (
                        <div key={i} className="w-full flex flex-col mb-4 text-[11px]">
                            <div className="font-bold mb-1">{data.heading}</div>
                            <div>{data.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterLinks;