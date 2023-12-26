import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import { issueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const issues = await request.json();
  const validation = issueSchema.safeParse(issues);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: issues.title,
      description: issues.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
