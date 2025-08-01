import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.app_user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.id}
        </div>
      ))}
    </div>
  );
}
