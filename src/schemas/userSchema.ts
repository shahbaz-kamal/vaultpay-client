import { AgentRequestStatus, IsActive, Role } from "@/types/user.type";
import z from "zod";

export const updateUserSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name should be at least minimum of two characters")
    .max(50, "Name should be maximum of 50 characters")
    .optional(),
  email: z
    .email("Invalid Email Format")
    .min(2, "Email should be at least minimum of two characters")
    .max(50, "Email should be maximum of 50 characters"),
  phone: z
    .string("Phone number must be a string")
    .regex(/^(\+8801[3-9][0-9]{8}|01[3-9][0-9]{8})$/, "Invalid Bangladeshi phone number format")
    .optional(),
  profilePicture: z.string("Photo link must be string").optional(),
  address: z
    .string("Address must be string")
    .max(200, {
      message: "Address can not exceed more than 200 characters",
    })
    .optional(),
  role: z.enum(Object.values(Role) as [string]).optional(),
  isActive: z.enum(Object.values(IsActive) as [string]).optional(),
  isDeleted: z.boolean("isDeleted Must be true or false.").optional(),
  isVerified: z.boolean("isVerified Must be true or false.").optional(),
  agentRequestStatus: z.enum(Object.values(AgentRequestStatus) as [string]).optional(),
  agentRequestedAt: z.date().optional(),
  agentApprovedAt: z.date().optional(),
});
