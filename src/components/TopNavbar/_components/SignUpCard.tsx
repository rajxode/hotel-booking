import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import {
  authSelector,
  signUpThunk,
} from "@/redux/reducers/Authentication/authSlice";

const SignUpCard: React.FC = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const { authLoading } = useAppSelector(authSelector);
  const SignUpSchema = z
    .object({
      name: z.string().min(1, { message: "Name is required." }),
      email: z.string().email({ message: "Invalid email address." }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." }),
      confirmPassword: z
        .string()
        .min(8, { message: "Confirm Password is required." }),
      role: z.enum(["customer", "manager"], {
        message: "Role must be either 'customer' or 'manager'.",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match.",
      path: ["confirmPassword"],
    });
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "customer",
    },
  });

  const handleSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    try {
      const result = await dispatch(signUpThunk(values)).unwrap();
      if (result?.success) {
        toast({
          variant: "success",
          description: result?.message,
        });
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="customer">Customer</SelectItem>
                      <SelectItem value="manager">Become a Host</SelectItem>
                    </SelectContent>
                  </Select>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col justify-center items-start">
            <Button disabled={authLoading}>
              {authLoading ? "Please wait..." : "Create Account"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpCard;
