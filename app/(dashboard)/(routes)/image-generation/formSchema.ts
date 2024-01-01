import * as z from "zod";

export const formSchema = z.object({
  prompt: z
    .string()
    .min(1, {
      message: "Image prompt is required",
    })
    .max(1000, {
      message: "Prompt must be less than 1000 characters",
    }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 photo",
  },
  {
    value: "2",
    label: "2 photos",
  },
  {
    value: "3",
    label: "3 photos",
  },
  {
    value: "4",
    label: "4 photos",
  },
  {
    value: "5",
    label: "5 photos",
  },
  {
    value: "6",
    label: "6 photos",
  },
  {
    value: "7",
    label: "7 photos",
  },
  {
    value: "8",
    label: "8 photos",
  },
  {
    value: "9",
    label: "9 photos",
  },
  {
    value: "10",
    label: "10 photos",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
  {
    value: "1280x720",
    label: "1280x720",
  },
  {
    value: "1920x1080",
    label: "1920x1080",
  },
  {
    value: "3840x2160",
    label: "3840x2160",
  },
  {
    value: "5120x2880",
    label: "5120x2880",
  },
  {
    value: "7680x4320",
    label: "7680x4320",
  },
];
