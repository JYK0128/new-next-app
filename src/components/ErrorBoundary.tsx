"use client";

import { isNil } from "lodash-es";
import { PropsWithChildren, ReactNode, useEffect } from "react";

interface Props {
  logger?: (error?: Error) => void
  children?: ReactNode
}

/** 에러 탐지 + 로깅 도구 */
export function ErrorBoundary({ children, logger }: PropsWithChildren<Props>) {
  return (
    <RuntimeErrorBoundary logger={logger}>
      {children}
    </RuntimeErrorBoundary>
  );
}

/** 런타임 에러 탐지 */
function RuntimeErrorBoundary({ children, logger }: PropsWithChildren<Pick<Props, "logger">>) {
  useEffect(() => {
    window.onerror = (_message, _source, _lineno, _colno, error) => {
      if (process.env.NODE_ENV === "production") {
        return true;
      }
      if (isNil(error)) return;
      if (!error?.stack?.includes("renderWithHooks")) {
        logger?.(error);
      }
    };
    window.onunhandledrejection = (event) => {
      if (process.env.NODE_ENV === "production") {
        event.preventDefault();
      }
      logger?.(new Error(event.reason.message));
    };

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, [logger]);

  return children;
}
