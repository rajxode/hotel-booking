
const TopNavbar = () => {
    return (
        <div className='w-full fixed top-0 left-0 right-0 h-auto bg-inherit text-white z-10 px-[2%] md:px-[10%] py-3 flex justify-between items-center'>
            <div>
                My Hotel booking site
            </div>
            <div className='flex justify-around'>
                <div>
                    <button>
                        Login / SignUp
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;