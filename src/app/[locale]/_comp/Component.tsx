import prisma from "@/lib/prisma";


export async function Component() {
  const users = await prisma.app_user.findMany();

  return (
    <div>
      <div>프리즈마 테스트</div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.id}
          </div>
        ))}
      </div>
    </div>
  );
}
