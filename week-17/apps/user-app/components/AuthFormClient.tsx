"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { AuthForm } from "./auth/auth-form";

const AuthFormClient = async () => {
  return (
    <>
      <AuthForm signIn={signIn} />
    </>
  );
};

export default AuthFormClient;
