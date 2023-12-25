import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/db";

const issueSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(3).max(255),
});

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  const issues = await request.json();
  const validation = issueSchema.safeParse(issues);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: issues.title,
      description: issues.description,
    },
  });
  return NextResponse.json(newIssue,{status:201}); 
}
