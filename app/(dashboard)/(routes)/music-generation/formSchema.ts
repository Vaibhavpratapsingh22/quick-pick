import * as z from "zod";

export const formSchema = z.object({
  prompt: z
    .string()
    .min(1, {
      message: "Music Prompt is required",
    })
    .max(1000, {
      message: "Music Prompt must be less than 1000 characters",
    }),
});
