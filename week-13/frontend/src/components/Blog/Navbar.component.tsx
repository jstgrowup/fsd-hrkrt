import { Link } from "react-router-dom";
import { Avatar } from "./Avatar.component";
const Navbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="font-semibold text-lg flex items-center cursor-pointer">
          Medium
        </div>
      </Link>
      <div>
        <Avatar size={"big"} name="subham" />
      </div>
    </div>
  );
};

export default Navbar;
