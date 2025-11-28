import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForgetPasswordMutation } from "@/redux/features/auths/auth.api";
import { forgetPasswordSchema } from "@/schemas/forgetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export function ForgetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const [sendEmail, setSendEmail] = useState(false);
  const [timer, setTimer] = useState(300);
  const [email, setEmail] = useState("");





  const [forgetPassword] = useForgetPasswordMutation();



  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: z.infer<typeof forgetPasswordSchema>) => {
    const toastId = toast.loading("Sending Email");

    setEmail(data.email);
    try {
      const userInfo = {
        email: data.email,
      };
      console.log(userInfo);
      const result = await forgetPassword(userInfo).unwrap();
      if (result.success) {
        toast.success("Email Sent Successfully", { id: toastId });
        setSendEmail(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSendEmail = async () => {
    const toastId = toast.loading("Sending OTP");
    try {
      const res = await forgetPassword({ email }).unwrap();
      if (res.success) {
        toast.success("Email Send Successfully", { id: toastId });
        setSendEmail(true);
        setTimer(300);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };



  useEffect(() => {
    const timerId = setInterval(() => {
      if (email && sendEmail) {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer, email, sendEmail]);

  return (
    <div className={cn("flex flex-col gap-6 items-center", className)} {...props}>
      {sendEmail ? (
        <Card className=" w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">An Email with reset password link has been sent to {email}</CardTitle>
            <CardDescription>Please check your email address for resetting password </CardDescription>
          </CardHeader>
          <CardContent>
            {" "}
            <div className="text-center mt-1 flex flex-col items-center justify-center gap-1">
              <Button
                onClick={handleSendEmail}
                disabled={timer !== 0}
                type="button"
                variant="link"
                className={cn("p-0 m-0", { "cursor-pointer": timer === 0, "text-gray-500": timer !== 0 })}
              >
                Resend Email
              </Button>
              <div>
                in {timer} {timer > 1 ? "seconds" : "second"}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">Provide Your Email Address</CardTitle>
            <CardDescription>We will send you a reset password link at this email</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input className="" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">This is your Email address</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className=" w-full mx-auto">
                Send Email
              </Button>
            </form>
          </Form>

          {/* <CardContent className="flex justify-center">
            <Button onClick={handleSendOtp} className="w-1/2 mx-auto">
              Send Email
            </Button>
          </CardContent> */}
        </Card>
      )}
    </div>
  );
}
