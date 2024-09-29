import z from "zod";
import { signinSchema, signupSchema } from "../validations/auth";

export type SignupType = z.infer<typeof signupSchema>;
export type SigninType = z.infer<typeof signinSchema>;
