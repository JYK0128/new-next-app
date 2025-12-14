"use client";
import { notFound } from "next/navigation";
import SwaggerUI from "swagger-ui-react";

export default function ApiDoc() {
  if (process.env.NODE_ENV !== "development") {
    notFound(); // 404 페이지로
  }

  return (
    <SwaggerUI url="/openapi.json" />
  );
}
