import admin from "firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import query from "@/app/lib/queryApi";
import { adminDB } from "@/firebaseAdmin";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  console.log(reqBody);
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
    const response = await query(prompt, id, model);

    const message = {
      text: response || "Claudio was unable to find an answer for that!",
      createAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "Claudio",
        name: "Claudio",
        avatar: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      },
    };

    await adminDB
      .collection("users")
      .doc(session)
      .collection("chats")
      .doc(id)
      .collection("messages")
      .add(message);

    return NextResponse.json(
      {
        answer: message?.text,
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
