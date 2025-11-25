import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Password from "@/components/ui/Password";
import { cn } from "@/lib/utils";
import { useResetPasswordMutation } from "@/redux/features/auths/auth.api";
import { resetPasswordSchema } from "@/schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import type z from "zod";

export function VerifyResetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id") || "";
  const token = searchParams.get("token") || "";

  
  console.log(id, token);


  const [resetPassword] = useResetPasswordMutation();



  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { newPassword: "" },
  });

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    const toastId = toast.loading("Resetting Password");
    try {
      console.log(data);
      const userInfo = {
        newPassword: data.newPassword,
        id,
        token
      };
      const result = await resetPassword(userInfo).unwrap();
      if (result.success) {
        toast.success("Password reset successfull", { id: toastId });
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };



  useEffect(() => {
    if (!id || !token) {
      toast.error("Please provide your email first...");
      setTimeout(() => navigate("/forget-password"), 0);
    }
  }, [navigate,id,token]);

 

  return (
    <div className={cn("flex flex-col gap-6 items-center", className)} {...props}>
      <Card className=" w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold">Enter your new password</CardTitle>
          <CardDescription> </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  space-y-6">
              <FormField
                control={form.control}
                name="newPassword"
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
              <Button type="submit" className="w-full mx-auto">
                Reset Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
