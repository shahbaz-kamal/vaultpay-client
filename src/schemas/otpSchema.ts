import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string("Otp Must be string").min(6, "Your One Time Password must be 6 characters"),
});
