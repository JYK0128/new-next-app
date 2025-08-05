import prisma from "@/lib/prisma";


export async function PrismaComponent() {
  const users = await prisma.appUser.findMany();

  return (
    <div>
      <div>프리즈마 테스트</div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div>{user.email}</div>
            <div>{user.nickname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
