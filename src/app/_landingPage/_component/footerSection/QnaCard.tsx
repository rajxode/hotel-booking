
import React from "react";

interface QnaProp {
    question: string;
    answer:string;
}

const QnaCard:React.FC<QnaProp> = ({question,answer}) => {
    return (
        <div className="w-[45%] flex flex-col justify-between items-center">
            <div className="w-full font-bold mb-3">
                Q. {question}
                </div>
            <div className="w-full text-xs">
                A. {answer}
            </div>
        </div>
    )
}

export default QnaCard;