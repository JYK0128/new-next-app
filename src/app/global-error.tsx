"use client"; // Error boundaries must be Client Components

export default function GlobalError() {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={window.location.reload}>Try again</button>
      </body>
    </html>
  );
}
