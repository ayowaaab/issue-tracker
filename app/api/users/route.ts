import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

import { getServerSession } from "next-auth";

export async function GET(request: NextRequest) {
//   const session = await getServerSession();
//   if (!session) return NextResponse.json({}, { status: 401 });
  const users = await prisma.user.findMany({orderBy:{name:'asc'}});
  return NextResponse.json(users, { status: 200 });
}
