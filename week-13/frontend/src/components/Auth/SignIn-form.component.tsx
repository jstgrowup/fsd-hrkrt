import { useState } from "react";
import { SigninInput } from "@jstgrwup/medium-common";
import LabelledInput from "../Labelled-input.component";
import AuthHeader from "./Auth-header.component";
import { AUTH_TYPE } from "../../utils/Enums";
import AuthButton from "./Auth-button.component";
const SigninForm = () => {
  const [userInputs, setuserInput] = useState<SigninInput>({
    username: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <AuthHeader type={AUTH_TYPE.SIGNIN} />
      <div className=" min-w-10 mt-4">
        <LabelledInput
          label="Username"
          placeholder="Enter your username"
          onChange={(e) =>
            setuserInput({ ...userInputs, username: e.target.value })
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
        <AuthButton type={AUTH_TYPE.SIGNIN} />
      </div>
    </div>
  );
};

export default SigninForm;
