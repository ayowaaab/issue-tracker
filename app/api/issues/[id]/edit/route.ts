import { NextResponse } from "next/server";
import prisma from "@/prisma/db";


export async function PUT(request: Request,idIssue:string) {
  const body = await request.json();
    const {} = body

  const updateIssue = await prisma.issue.update({
    where:{id:idIssue}
    ,data:{
        updatedAt:Date.now(),
description:body.
    }
  });
  return NextResponse.json(newIssue, { status: 201 });
}
