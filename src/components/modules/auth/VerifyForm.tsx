import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/features/auths/auth.api";
import { otpSchema } from "@/schemas/otpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import type z from "zod";

export function VerifyForm({ className, ...props }: React.ComponentProps<"div">) {
  const [sentOtp, setSentOtp] = useState(false);
  const [timer, setTimer] = useState(120);

  const location = useLocation();
  const navigate = useNavigate();

  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();

  const getInitialEmail = () => {
    if (!location.state) return "";
    if (typeof location.state === "string") return location.state;
    if (typeof location.state === "object" && location.state.email) {
      return location.state.email;
    }
    return "";
  };

  const [email] = useState(getInitialEmail());

  // console.log("From verify page", location);
  // console.log("From verify Page", email);
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = async (data: z.infer<typeof otpSchema>) => {
    const toastId = toast.loading("Verifying OTP");
    try {
      // console.log(data);
      const userInfo = {
        email,
        otp: data.otp,
      };
      const result = await verifyOtp(userInfo).unwrap();
      if (result.success) {
        toast.success("OTP verified successfully. PLease Login to continue", { id: toastId, duration: 3000 });
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // console.log(error);
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

  useEffect(() => {
    if (!email) {
      toast.error("No email provided for verification.");
      navigate("/");
    }
  }, [email]);

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
      {sentOtp ? (
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
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="w-full  flex flex-col justify-center items-center">
                      <FormLabel className="text-center w-full flex justify-center mb-2">One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup className="flex justify-center gap-3">
                            <InputOTPSlot index={0} />

                            <InputOTPSlot index={1} />

                            <InputOTPSlot index={2} />

                            <InputOTPSlot index={3} />

                            <InputOTPSlot index={4} />

                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription className="text-center mt-1 flex items-center justify-center gap-1">
                        <Button
                          disabled={timer !== 0}
                          onClick={handleSendOtp}
                          type="button"
                          variant="link"
                          className={cn("p-0 m-0", { "cursor-pointer": timer === 0, "text-gray-500": timer !== 0 })}
                        >
                          Resend OTP
                        </Button>
                        <div>
                          in {timer} {timer > 1 ? "seconds" : "second"}
                        </div>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-1/2 mx-auto">
                  Verify
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className=" w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">Verify Your Email Address</CardTitle>
            <CardDescription>
              We will send you an otp at <span className="font-semi"> {email}</span>{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={handleSendOtp} className="w-1/2 mx-auto">
              Send OTP
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
