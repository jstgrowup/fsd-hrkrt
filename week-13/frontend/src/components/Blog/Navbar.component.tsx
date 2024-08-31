import { Link } from "react-router-dom";
import { Avatar } from "./Avatar.component";
const Navbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <Link to={"/blogs"}>
        <div className="font-semibold text-lg flex items-center cursor-pointer">
          Medium
        </div>
      </Link>
      <div className="flex gap-4">
        <div>
          <Avatar size={"big"} name="subham" />
        </div>
        <div>
          <Link to={"/create-blog"}>
            <div className="w-32 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Create Blog
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
