import React from "react";
import AuthForm from "../components/Auth.component";
import Quote from "../components/Quote.component";

const SignIn = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <AuthForm type="signin" />
      </div>
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
};

export default SignIn;
