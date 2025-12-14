import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div>
      <h2>Unauthorized</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
