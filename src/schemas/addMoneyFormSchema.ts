import { z } from "zod";

export const addMoneySchema = z.object({
  // recieverEmail: z
  //   .email("Invalid Email Format")
  //   .min(2, "Email should be at least minimum of two characters")
  //   .max(50, "Email should be maximum of 50 characters").optional(),
  amount: z.coerce.number().min(20, "Amount must be at least 20 BDT"),

  notes: z.string("Notes Must be string").min(2, "Notes must includes at least 2 characters"),
});
