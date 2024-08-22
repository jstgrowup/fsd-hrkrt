import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.get("/", (c) => {
  // context ahs all the things like request and response
  return c.text("Hello Hono!");
});
app.post("/api/vi/signup", async (c) => {
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
  return c.json(newUser);
});
app.post("/api/vi/signin", (c) => {
  return c.text("Hello Hono!");
});
app
  .post("/api/vi/blog", (c) => {
    return c.text("Hello Hono!");
  })
  .put((c) => {
    return c.text("Hello Hono!");
  });

app.get("/api/vi/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
export default app;
