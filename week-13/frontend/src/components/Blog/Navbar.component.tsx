import BlogCardAvatar from "./Avatar.component";
const Navbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="font-semibold text-lg flex items-center">Medium</div>
      <div>
        <BlogCardAvatar name="Subham" size={10} />
      </div>
    </div>
  );
};

export default Navbar;
