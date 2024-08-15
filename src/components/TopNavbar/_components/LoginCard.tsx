
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginData {
    email: string;
    password: string;
}

const LoginCard = () => {

    const [ userData, setUserData ] = useState<LoginData>({
        email:"",
        password:"",
    });

    return (
        <Card>
            <CardContent className="space-y-2 mt-5">
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
            </CardContent>
            <CardFooter>
                <Button>Login</Button>
            </CardFooter>
        </Card>
    )
}

export default LoginCard;