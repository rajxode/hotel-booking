import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarProps } from "@/components/TopNavbar/_interface/topNavbarInterface";
import { useAppDispatch } from "@/redux/reduxHooks";
import { signOutThunk } from "@/redux/reducers/Authentication/authSlice";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const AvatarAndMenu: React.FC<AvatarProps> = ({ user }) => {
  
  const {toast} = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogoutClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await dispatch(signOutThunk()).unwrap();
      if(result) {
        toast({
          variant: "success",
          description: "User logged out successfully"
        })
        router.push("/");
      }
    } catch (error:any) {
      console.log('Error in logout', error.message);
    }
  }

  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="text-black cursor-pointer">
                {user?.name[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={handleLogoutClick}
              >
                Log out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default AvatarAndMenu;
