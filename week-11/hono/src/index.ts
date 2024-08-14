import { Hono } from "hono";

const app = new Hono();
async function authMiddleware(c: any, next: any) {
  // c is context of this request , response
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("Unauthorized");
  }
}

app.get("/", async (c) => {
  const body = await c.req.json();
  const authHeader = c.req.header("Authorization");
  const cookie = c.req.header("Cookie");
  const param = c.req.query("param");
  return c.text("Hello Hono!yoyo");
});

export default app;
242983987854;
