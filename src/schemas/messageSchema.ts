import { z } from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, { message: "Content is required" })
    .max(300, { message: "Content must be 300 characters or less" })
})