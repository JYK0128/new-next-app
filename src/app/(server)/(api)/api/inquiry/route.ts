// hello world를 출력하는 post 메소드 라우터
import { NextRequest, NextResponse } from "next/server";

import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/routers";

export async function POST(req: NextRequest) {
  const caller = appRouter.createCaller(createContext);
  const res = await caller.inquiry.inquiry(req.formData());
  return NextResponse.json(res);
}
