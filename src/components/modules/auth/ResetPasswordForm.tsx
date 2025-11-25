import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Password from "@/components/ui/Password";
import { cn } from "@/lib/utils";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/features/auths/auth.api";
import { otpSchema } from "@/schemas/otpSchema";
import { resetPasswordSchema } from "@/schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import type z from "zod";

export function VerifyResetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const [sentOtp, setSentOtp] = useState(false);
  const [timer, setTimer] = useState(120);

  const location = useLocation();
  const navigate = useNavigate();

  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();

  const [email] = useState(location.state || "");

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { id: "", newPassword: "" },
  });

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    const toastId = toast.loading("Verifying OTP");
    try {
      console.log(data);
      const userInfo = {
        email,
        otp: data.otp,
      };
      const result = await verifyOtp(userInfo).unwrap();
      if (result.success) {
        toast.success("OTP verified successfully.", { id: toastId });
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSendOtp = async () => {
    const toastId = toast.loading("Sending OTP");
    try {
      const res = await sendOtp({ email }).unwrap();
      if (res.success) {
        toast.success("OTP sent successfully to your email.", { id: toastId });
        setSentOtp(true);
        setTimer(120);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  //   useEffect(() => {
  //     if (!email) {
  //       toast.error("No email provided for verification.");
  //       navigate("/");
  //     }
  //   }, [email]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (email && sentOtp) {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer, email, sentOtp]);

  return (
    <div className={cn("flex flex-col gap-6 items-center", className)} {...props}>
      <Card className=" w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold">Verify It's You</CardTitle>
          <CardDescription>Please verify your identity by entering the one-time password sent to your email </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col items-center space-y-6">
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
              <Button type="submit" className="w-1/2 mx-auto">
                Reset Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
