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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
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
