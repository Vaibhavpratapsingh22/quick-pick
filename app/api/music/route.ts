import { increaseApiCount, userHasLimit } from "@/lib/apiLimitCheck";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  const { prompt } = body;
  try {
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    const freeTrial = await userHasLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial limit reached", { status: 403 });
    }
    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
      );
      await increaseApiCount();
      return NextResponse.json(response);
  } catch (err: any) {
    return new NextResponse("Internal Errors", { status: 500 });
  }
}
