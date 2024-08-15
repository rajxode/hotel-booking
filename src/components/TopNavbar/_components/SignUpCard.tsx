
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignUpData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpCard:React.FC = () => {

    const [ userData, setUserData ] = useState<SignUpData>({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    return (
        <Card>
            <CardContent className="space-y-2 mt-5">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                        id="name" 
                        type="text" 
                        value={userData?.name} 
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        value={userData?.email} 
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password" 
                        type="password"
                        value={userData?.password} 
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input 
                        id="confirm" 
                        type="password" 
                        value={userData?.confirmPassword} 
                        onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Create Account</Button>
            </CardFooter>
        </Card>
    )
}

export default SignUpCard;