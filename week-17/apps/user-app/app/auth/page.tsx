"use client";
import { AuthForm } from "@repo/ui/auth";
import { signIn } from "next-auth/react";
import React from "react";
const Auth = () => {
  return (
    <>
      <AuthForm signIn={signIn} />;
    </>
  );
};
export default Auth;
