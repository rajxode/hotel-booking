
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
import MenuItemCard from "./MenuItemCard";

const SliderMenu:React.FC = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button><HiMenuAlt2 /></button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-start items-center p-2 bg-[#f2f2f2]">
          {Array(2).fill(0).map((_,i) => <MenuItemCard />)}
        </SheetContent>
      </Sheet>
    )
}

export default SliderMenu;