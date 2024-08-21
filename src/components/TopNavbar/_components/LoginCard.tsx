
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInData } from "@/components/TopNavbar/_interface/topNavbarInterface";
import { authSelector, signInThunk } from "@/redux/reducers/Authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const LoginCard:React.FC = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { authLoading } =  useAppSelector(authSelector);
    const { toast } = useToast();
    const [ userData, setUserData ] = useState<SignInData>({
        email:"",
        password:"",
    });
    const [emailErrMessage, setEmailErrMessage] = useState("");
    const [passErrMessage, setPassErrMessage] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(emailErrMessage) {
            setEmailErrMessage("");
        }
        setUserData({...userData, email: e.target.value});
    }

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(passErrMessage) {
            setPassErrMessage("");
        }
        setUserData({...userData, password: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(!userData.email && !userData.password) {
                setEmailErrMessage("Please enter your email");
                setPassErrMessage("Please enter your password");
                return;
            }
            if(!userData.email) {
                setEmailErrMessage("Please enter your email");
                return;
            }
            if(!userData.password) {
                setPassErrMessage("Please enter your password");
                return;
            }
            const result = await dispatch(signInThunk(userData)).unwrap();
            if(result?.success) {
                toast({
                    variant: "success",
                    description: result?.message
                });
                setUserData({
                    email:"",
                    password:""
                });
                router.replace('/home');
            } else {
                throw new Error(result?.message);
            }
        } catch (error:any) {
            console.log('error in signin', error.message);
            toast({
                variant: "destructive",
                description: `Error: ${error.message}`
            })
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2 mt-5">
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email"
                        value={userData?.email} 
                        onChange={handleEmailChange}
                    />
                    {
                        emailErrMessage
                        &&
                        <p className="text-xs text-red-500 mt-1">
                            {emailErrMessage}
                        </p>
                    }
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password" 
                        type="password"
                        value={userData?.password} 
                        onChange={handlePassChange}
                    />
                    {
                        passErrMessage
                        &&
                        <p className="text-xs text-red-500 mt-1">
                            {passErrMessage}
                        </p>
                    }
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                >
                    {
                        authLoading
                        ?
                        "Please wait..."
                        :
                        "Login"
                    }
                </Button>
            </CardFooter>
            </form>
        </Card>
    )
}

export default LoginCard;