import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function updateUser() {
  const response = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      email: "deysubham999@gmail.com",
    },
  });
  console.log("response:", response);
}
updateUser();
