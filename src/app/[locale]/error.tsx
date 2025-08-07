"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";


// eslint-disable-next-line sonarjs/no-globals-shadowing
export default function Error({ reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => {
        router.refresh();
        startTransition(reset);
      }}
      >
        Try again
      </button>
    </div>
  );
}
