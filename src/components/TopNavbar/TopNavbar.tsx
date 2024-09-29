"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/reduxHooks";
import { authSelector } from "@/redux/reducers/Authentication/authSlice";
import AvatarAndMenu from "@/components/TopNavbar/_components/AvatarAndMenu";
import AuthenticationDialog from "@/components/TopNavbar/_components/AuthenticationDialog";
import SliderMenu from "@/components/TopNavbar/_components/SliderMenu";

const TopNavbar: React.FC = () => {
  const { user } = useAppSelector(authSelector);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 h-auto z-10 px-[2%] 
          md:px-[10%] py-4 flex justify-between items-center
          text-sm sm:text-base
          ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-inherit text-white py-3"
          } transition ease-in-out duration-600`}
    >
      <div className="flex items-center">
        <div className="sm:hidden mr-2 text-2xl">
            <SliderMenu />
        </div>
        <Link href="/">
          My Hotel booking site
        </Link>
      </div>
      <div className="flex justify-around">
        {
            user 
            ?
              <AvatarAndMenu
                  user={user}
              />
            :
              <AuthenticationDialog />
        }
      </div>
    </div>
  );
};

export default TopNavbar;
