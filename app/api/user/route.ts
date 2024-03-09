import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET() {
  return Response.json({
    name: "Aswin",
    email: "aswin@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({
    msg: "User created successfully",
  });
}
