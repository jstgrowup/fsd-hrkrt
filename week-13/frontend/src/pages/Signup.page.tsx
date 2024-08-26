import Quote from "../components/Quote.component";
import SignupForm from "../components/SignupForm.component";

const Signup = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <SignupForm type="signup" />
      </div>
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
