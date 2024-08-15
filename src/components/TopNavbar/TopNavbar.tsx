
'use client';
import React, { useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import LoginCard from "./_components/LoginCard";
import SignUpCard from "./_components/SignUpCard";

const TopNavbar = () => {

    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        if(window !== undefined) {
            window.addEventListener('scroll',() => {
                if(window.scrollY > 80) {
                    setScrolled(true);
                }
                else{
                    setScrolled(false);
                }
            });
        }
    },[]);

    return (
        <div className={`w-full fixed top-0 left-0 right-0 h-auto z-10 px-[2%] md:px-[10%] py-4 flex justify-between items-center
            ${ scrolled ? "bg-white text-black shadow-md" : "bg-inherit text-white py-3" } transition ease-in-out duration-600`}
        >
            <div>
                My Hotel booking site
            </div>
            <div className='flex justify-around'>
                <div>
                    <Dialog>
                    <DialogTrigger>Login / Sign up</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogDescription>
                        <Tabs defaultValue="login" className="w-full mt-2">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Create Account</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <LoginCard />
                            </TabsContent>
                            <TabsContent value="signup">
                                <SignUpCard />
                            </TabsContent>
                            </Tabs>
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;