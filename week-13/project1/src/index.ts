import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/api/v1/blog/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c?.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const header = String(c.req.header("Authorization"));

    const decodedToken = await verify(header, c.env.JWT_SECRET);

    if (!decodedToken) {
      c.status(403);
      return c.json({ message: "Unauthorized user" });
    }
    const userId = String(decodedToken.id);

    const foundUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!foundUser) {
      c.status(401);
      return c.json({ message: "Unauthorized user" });
    }

    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "Unauthorized user" });
  }
});
app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c?.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
  const token = await sign({ id: newUser.id }, c?.env.JWT_SECRET);
  return c.text(token);
});
app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c?.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }
  const token = await sign({ id: user.id }, c?.env.JWT_SECRET);

  return c.text(token);
});
app
  .post("/api/v1/blog", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c?.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const header = c.req.header("Authorization");
    if (!header) {
      c.status(401);
      return c.json({ error: "Unauthorized" });
    }
    const decodedToken = await verify(header, c.env.JWT_SECRET);

    if (!decodedToken) {
      c.status(403);
      return c.json({ message: "Unauthorized user" });
    }
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: body.authorId,
      },
    });
    return c.json({ data: post });
  })
  .put((c) => {
    return c.text("Hello Hono!");
  });

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
export default app;
