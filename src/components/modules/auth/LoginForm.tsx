import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import Password from "@/components/ui/Password";
import { useLoginMutation } from "@/redux/features/auths/auth.api";
import { loginSchema } from "@/schemas/loginFormSchema";
import { toast } from "sonner";
import type z from "zod";
import GoogleLogin from "./GoogleLogin";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      // console.log(userInfo);

      const result = await login(userInfo).unwrap();
      // console.log(result);
      if (result.success) {
        toast.success("Login successful!");
        navigate("/");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // console.log(error);
      if (error.data.message === "User is Not Verified") {
        toast.error(error.data.message);
        navigate("/verify", { state: data.email });
      }
      if (error.data.message === "Password Does not match") {
        toast.error(error.data.message);
      } else toast.error(error.data.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>Login with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <GoogleLogin operation="Login"></GoogleLogin>
          <Form {...form}>
            <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">This is your Email address</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <Password {...field}></Password>
                    </FormControl>
                    <FormDescription className="sr-only">This is your Password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Link to="/forget-password" className="text-sm text-red-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <FieldDescription className="text-center">
                Don't Have an account?{" "}
                <span className="underline-offset-4 hover:underline dark:text-primary-foreground font-semibold">
                  <Link to="/register">Register now</Link>
                </span>
              </FieldDescription>

              <Button className=" w-full hover:cursor-pointer" type="submit">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking Login, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
