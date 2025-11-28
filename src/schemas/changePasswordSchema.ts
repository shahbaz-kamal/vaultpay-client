import { z } from "zod";

export const changePasswordSchema = z.object({
  oldPassword: z
    .string("Password Must be string")
    .min(6, "Password must includes at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
  newPassword: z
    .string("Password Must be string")
    .min(6, "Password must includes at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});
