import { auth } from "@/auth";


export default async function Page() {
  const user = await auth();

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}
