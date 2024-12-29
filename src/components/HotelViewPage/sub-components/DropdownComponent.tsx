import React from "react";
import { Edit, PlusCircle, Settings, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownComponent: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Manage Hotel
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hotel Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        // onClick={handleUpdateHotel}
        >
          <Edit className="mr-2 h-4 w-4" /> Update Hotel Info
        </DropdownMenuItem>
        <DropdownMenuItem
        // onClick={handleAddRoom}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Room
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        // onClick={handleRemoveHotel} className="text-red-600"
        >
          <Trash className="mr-2 h-4 w-4" /> Remove Hotel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownComponent;
