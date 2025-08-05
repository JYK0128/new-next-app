"use client";
import SwaggerUI from "swagger-ui-react";


export default function ApiDoc() {
  return (
    <SwaggerUI url="/openapi.json" />
  );
}
