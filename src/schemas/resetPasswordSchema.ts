import { z } from "zod";

export const resetPasswordSchema = z.object({
  id: z.string("Otp Must be string").min(6, "Your One Time Password must be 6 characters"),
  newPassword: z
    .string("Password Must be string")
    .min(6, "Password must includes at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});
