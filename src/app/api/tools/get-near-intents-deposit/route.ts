import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Sample static response
    return NextResponse.json({
      message: "Sample response for get-near-intents-deposit",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
