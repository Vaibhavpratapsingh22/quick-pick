import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const config = process.env.OPENAI_API_KEY;
const openai: OpenAI = new OpenAI({
  apiKey: config,
});

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  const { prompt, amount = 1, resolution = "512x512" } = body;
  try {
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!config) {
      return new NextResponse("OPEN AI not configured", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }
    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }
    const response: OpenAI.Images.ImagesResponse = await openai.images.generate(
      {
        prompt,
        n: parseInt(amount, 10),
        size: resolution,
      }
    );
    return NextResponse.json(response.data);
  } catch (err: any) {
    return new NextResponse("Internal Errors", { status: 500 });
  }
}
