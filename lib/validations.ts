import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters long")
    .nonempty("Full name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  universityId: z.coerce.number().min(1, "University ID is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
  //   universityCard: z.instanceof(File, "University card is required"),
});

export const signInSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});
