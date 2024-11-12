import { z } from "zod";

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 characters long")
.max(20, "Username must be no more than 20 characters")
.regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Username must not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email("Invalid email"),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"})
})