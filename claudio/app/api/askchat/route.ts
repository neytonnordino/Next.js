import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  const { prompt, id, model, session } = await reqBody;

  try {
    if (!prompt) {
      return NextResponse.json(
      {
        message: "Please provide a prompt",
      },
      { status: 400 }
    );
    }
    if (!id) {
      return NextResponse.json(
      {
        message: "Please provide a valid ID",
      },
      { status: 400 }
    );
    }
    return NextResponse.json(
      {
        success: true,
        message: "API is connected",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error },
      {
        status: 500,
      }
    );
  }
};
