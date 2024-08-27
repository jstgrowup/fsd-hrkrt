import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@jstgrwup/medium-common";
import LabelledInput from "./Labelled-input.component";
const SignupForm = ({ type }: { type: "signup" | "signin" }) => {
  const [userInputs, setuserInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
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
        <LabelledInput
          label="Username"
          placeholder="Enter your username"
          onChange={(e) =>
            setuserInput({ ...userInputs, name: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default SignupForm;
