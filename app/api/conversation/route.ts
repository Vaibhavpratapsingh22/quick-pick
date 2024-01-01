import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const config = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: config,
});

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  const { messages } = body;
  try {
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!config) {
      return new NextResponse("OPEN AI not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    const response: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
      });
    return NextResponse.json(response);
  } catch (err: any) {
    return new NextResponse("Internal Errors", { status: 500 });
  }
}
