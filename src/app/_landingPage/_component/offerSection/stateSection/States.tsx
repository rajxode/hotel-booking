
import React from 'react'
import StateCard from "@/app/_landingPage/_component/offerSection/stateSection/StateCard";
import { stateListArray } from '@/utils/constantData/stateListArray';

const States:React.FC = () => {
    return (
        <div className='w-full min-h-[70vh] flex justify-center items-center'>
            <div className='w-4/5 bg-white h-[90%] rounded-lg shadow p-6 flex justify-start flex-wrap mb-4'>
                {
                    stateListArray.map((state,i) => <StateCard key={i} state={state} />) 
                }
            </div>
        </div>
    )
}

export default States