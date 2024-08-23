
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpData } from "@/components/TopNavbar/_interface/topNavbarInterface";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { authSelector, signUpThunk } from "@/redux/reducers/Authentication/authSlice";


const SignUpCard:React.FC = () => {
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const { authLoading } = useAppSelector(authSelector);
    const [ userData, setUserData ] = useState<SignUpData>({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [nameErrMessage, setNameErrMessage] = useState("");
    const [emailErrMessage, setEmailErrMessage] = useState("");
    const [passErrMessage, setPasaErrMessage] = useState("");
    const [cnfErrMessage, setCnfErrMessage] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(nameErrMessage) {
            setNameErrMessage("");
        }
        setUserData({...userData, name: e.target.value});
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(emailErrMessage) {
            setEmailErrMessage("");
        }
        setUserData({...userData, email: e.target.value});
    }

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(passErrMessage) {
            setPasaErrMessage("");
        }
        setUserData({...userData, password: e.target.value});
    }

    const handleCnfPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(cnfErrMessage) {
            setCnfErrMessage("");
        }
        setUserData({...userData, confirmPassword: e.target.value});
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(!userData.name && !userData.email && !userData.password && !userData.confirmPassword) {
                setNameErrMessage("Please enter your name");
                setEmailErrMessage("Please enter your email");
                setPasaErrMessage("Please enter your password");
                setCnfErrMessage("Please enter confirm password");
                return;
            }
            if(!userData.name) {
                setNameErrMessage("Please enter your name");
                return;   
            }
            if(!userData.email) {
                setEmailErrMessage("Please enter your email");
                return;   
            }
            if(!userData.password) {
                setPasaErrMessage("Please enter your password");
                return;   
            }
            if(!userData.confirmPassword) {
                setCnfErrMessage("Please enter confirm password");
                return;   
            }
            if(userData.password !== userData.confirmPassword) {
                setErrorMessage("Password and Confirm Password doesn't match");
                return;
            }
            if(errorMessage) {
                setErrorMessage("");
            }
            const result = await dispatch(signUpThunk(userData)).unwrap();
            if(result?.success) {
                toast({
                    variant: "success",
                    description: result?.message
                })
                setUserData({
                    name:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                });
            } else {
                throw new Error(result?.message);
            }
        } catch (error:any) {
            console.log('error in signup ', error.message);
            toast({
                variant:"destructive",
                description: `Error: ${error.message}`
            })
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2 mt-5">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                        id="name" 
                        type="text" 
                        value={userData?.name} 
                        onChange={handleNameChange}
                    />
                    {
                        nameErrMessage
                        &&
                        <p className="text-xs text-red-500 mt-1">
                            {nameErrMessage}
                        </p>
                    }
                </div>
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
                <div className="space-y-1">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input 
                        id="confirm" 
                        type="password" 
                        value={userData?.confirmPassword} 
                        onChange={handleCnfPassChange}
                    />
                    {
                        cnfErrMessage
                        &&
                        <p className="text-xs text-red-500 mt-1">
                            {cnfErrMessage}
                        </p>
                    }
                </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-start">
                <Button
                    disabled={authLoading}
                    >
                        {
                            authLoading
                            ?
                            "Please wait..."
                            :
                            "Create Account"
                        }
                </Button>
                {
                    errorMessage
                    &&
                    <p className="text-xs text-red-500 mt-1">
                        {errorMessage}
                    </p>
                }
            </CardFooter>
            </form>
        </Card>
    )
}

export default SignUpCard;