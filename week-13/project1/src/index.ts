import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/vi/signup", (c) => {
  return c.text("Hello Hono!");
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
