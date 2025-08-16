import { StatusCodes } from "http-status-codes";
import { isObject } from "lodash-es";


function getCauseFromUnknown(cause: unknown): Error | undefined {
  if (cause instanceof Error) {
    return cause;
  }

  const type = typeof cause;
  if (type === "undefined" || type === "function" || cause === null) {
    return undefined;
  }

  // Primitive types just get wrapped in an error
  if (type !== "object") {
    return new Error(String(cause));
  }

  // If it's an object, we'll create a synthetic error
  if (isObject(cause)) {
    return Object.assign(new UnknownCauseError(), cause);
  }

  return undefined;
}

class UnknownCauseError extends Error {
  [key: string]: unknown;
}

export class NextError extends Error {
  public override readonly cause?: Error;
  public readonly code;

  constructor(opts: {
    message?: string
    code: keyof typeof StatusCodes
    cause?: unknown
  }) {
    const cause = getCauseFromUnknown(opts.cause);
    const message = opts.message ?? cause?.message ?? opts.code;

    super(message, { cause });
    this.code = opts.code;
    this.name = "NextError";
    this.cause ??= cause;
  }
}
