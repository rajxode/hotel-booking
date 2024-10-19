import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  authSelector,
  signInThunk,
} from "@/redux/reducers/Authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const LoginCard: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { authLoading } = useAppSelector(authSelector);
  const { toast } = useToast();
  const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  });
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const result = await dispatch(signInThunk(values)).unwrap();
      if (result?.success) {
        toast({
          variant: "success",
          description: result?.message,
        });
        router.replace("/home");
      } else {
        throw new Error(result?.message);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: `Error: ${error.message}`,
      });
    }
  };

  return (
    <Card>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="space-y-2 mt-5">
        <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={authLoading}>
            {authLoading ? "Please wait..." : "Login"}
          </Button>
        </CardFooter>
      </form>
      </Form>
    </Card>
  );
};

export default LoginCard;
