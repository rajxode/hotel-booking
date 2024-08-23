
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader:React.FC = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <ClipLoader
                color="#ff2b2b"
                loading
                size={55}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loader;