import { increaseApiCount, userHasLimit } from "@/lib/apiLimitCheck";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const config = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: config,
});
const prompt: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are a code generator. You should only answer in markdown code snippets. Use code comments to explain your code.",
};
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
    const freeTrial = await userHasLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial limit reached", { status: 403 });
    }
    const response: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create({
      messages: [prompt, ...messages],
      model: "gpt-3.5-turbo",
    });
    await increaseApiCount();
    return NextResponse.json(response);
  } catch (err: any) {
    return new NextResponse("Internal Errors", { status: 500 });
  }
}
