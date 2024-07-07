import { issueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface IParams {
  params: { id: string };
}
export async function PATCH(request: Request, { params: { id } }: IParams) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({}, { status: 401 });
  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const { title, description } = body;
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id) },
    });
    if (!issue) return new NextResponse("Invalid ID", { status: 404 });

    const updateIssue = await prisma.issue.update({
      where: { id: parseInt(id) },
      data: {
        title: title,
        description: description,
      },
    });
    return NextResponse.json(updateIssue, { status: 201 });
  } catch (error: any) {
    console.log(error, "Error Message");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function DELETE(request: Request, { params: { id } }: IParams) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({}, { status: 401 });
  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id) },
    });
    if (!issue) return new NextResponse("Invalid ID", { status: 404 });

    await prisma.issue.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({});
  } catch (error: any) {
    console.log(error, "Error Message");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
