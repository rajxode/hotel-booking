
import React from "react";
import { footerQnaArray } from "@/utils/constantData/footerData";
import QnaCard from "@/app/_landingPage/_component/footerSection/QnaCard";

const FooterQna = () => {
    return (
        <div className="w-full bg-[#e7e7e7] flex justify-center items-center py-[7vh]">
            <div className="w-4/5 flex flex-col">
                <div className="w-full flex justify-between items-start my-5">
                    <QnaCard key={0} question={footerQnaArray[0]?.question} answer={footerQnaArray[0]?.answer} />
                    <QnaCard key={1} question={footerQnaArray[1]?.question} answer={footerQnaArray[1]?.answer} />
                </div>
                <div className="w-full border-b border-black my-5"></div>
                <div className="w-full flex justify-between items-start my-5">
                    <QnaCard key={2} question={footerQnaArray[2]?.question} answer={footerQnaArray[2]?.answer} />
                    <QnaCard key={3} question={footerQnaArray[3]?.question} answer={footerQnaArray[3]?.answer} />
                </div>
            </div>
        </div>
    )
}

export default FooterQna;