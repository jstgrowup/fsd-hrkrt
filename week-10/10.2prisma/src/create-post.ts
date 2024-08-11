import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info", "query"] });
async function createPost() {
  const response = await prisma.post.create({
    data: {
      title: "subham",
      content: "doing coding",
      published: true,
      author: { connect: { id: 1 } },
    },
  });
  console.log(response);
}
createPost();
