import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@jstgrwup/medium-common";
import LabelledInput from "./Labelled-input.component";
const AuthForm = ({ type }: { type: "signup" | "signin" }) => {
  const [userInputs, setuserInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className="text-3xl font-extrabold">
        {type === "signin" ? "Login to your account" : "Create and account"}
      </div>
      <p className="text-slate-400 font-semibold ">
        {type === "signin"
          ? "Dont have an account?"
          : "Already have an account?"}
        <Link
          to={type === "signin" ? "/signup" : "/signin"}
          className="underline ml-1"
        >
          {type === "signin" ? "Sign Up" : "Sign In"}
        </Link>
      </p>
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Username"
          placeholder="Enter your username"
          onChange={(e) =>
            setuserInput({ ...userInputs, username: e.target.value })
          }
        />
        <LabelledInput
          label="Name"
          placeholder="Enter your name"
          onChange={(e) =>
            setuserInput({ ...userInputs, name: e.target.value })
          }
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) =>
            setuserInput({ ...userInputs, password: e.target.value })
          }
        />
        <button
          type="button"
          className="text-white bg-gray-800 w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4"
        >
          {type === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
