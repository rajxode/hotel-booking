

function Navbar() {
  return (
    <div className="w-full h-[65px] bg-[#e11d48] px-[5%] flex justify-between items-center text-white">
        <div className="text-2xl font-semibold">
            Hotel Booking
        </div>
        {/* <div>
            <input type="text" 
                placeholder="Search"
                className="px-2 focus:outline-none"
                />
            <button className="bg-white text-black px-2 border-l">
                Search
            </button>
        </div> */}
        <div>
            Login / SignUp
        </div>
    </div>
  )
}

export default Navbar;