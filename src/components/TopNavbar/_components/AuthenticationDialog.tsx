import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginCard from "@/components/TopNavbar/_components/LoginCard";
import SignUpCard from "@/components/TopNavbar/_components/SignUpCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthenticationDialog: React.FC = () => {
  return (
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
  );
};

export default AuthenticationDialog;
