import { Hono } from "hono";
import { userRouter } from "./routes/user.routes";
import { blogRouter } from "./routes/blog.routes";
const app = new Hono();
app.route("/api/v1/blog", blogRouter);
app.route("/api/v1/user", userRouter);

export default app;
