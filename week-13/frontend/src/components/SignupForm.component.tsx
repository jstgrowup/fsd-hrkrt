import React from "react";
import { Link } from "react-router-dom";

const SignupForm = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex justify-center flex-col items-center border border-red-600">
      <div>
        <div className="text-2xl font-extrabold">Create an account</div>
        <p className="text-slate-400 font-semibold">
          Already have an account?{" "}
          <Link to={"/signin"} className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
