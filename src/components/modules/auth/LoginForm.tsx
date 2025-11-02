import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import type z from "zod";
import Password from "@/components/ui/Password";
import { useLoginMutation, useRegisterMutation } from "@/redux/features/auths/auth.api";
import { toast } from "sonner";
import { loginSchema } from "@/schemas/loginFormSchema";

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
      console.log(userInfo);
      const result = await login(userInfo).unwrap();
      console.log(result);
      toast.success("Login successful!");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      if (error.status === 400) {
        toast.error(error.data.message);
        navigate("/verify",{state:data.email});
      }
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
          {/* original form */}
          <FieldGroup>
            <Field>
              <Button variant="outline" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Login with Google
              </Button>
            </Field>
            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card mb-2">Or continue with</FieldSeparator>
          </FieldGroup>

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
              <FieldDescription className="text-center">
                Don't Have an account?{" "}
                <span className="underline-offset-4 hover:underline text-primary-foreground font-semibold">
                  <Link to="/register">Register now</Link>
                </span>
              </FieldDescription>

              <Button className=" w-full" type="submit">
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
