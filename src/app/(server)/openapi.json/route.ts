import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

import { openApiDocument } from "@/lib/openapi";

// Respond with our OpenAPI schema
export const GET = () => {
  if (process.env.NODE_ENV !== "development") {
    notFound(); // 404 페이지로
  }

  return NextResponse.json(openApiDocument);
};
