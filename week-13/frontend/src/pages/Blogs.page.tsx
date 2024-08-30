import { useRecoilValue } from "recoil";
import BlogCard from "../components/Blog/Blog-card.component";
import Navbar from "../components/Blog/Navbar.component";
import { blogsAtomState, UserState } from "../recoil/atoms";

import { Blog } from "../utils/Types-interfaces";
const Blogs = () => {
  const userToken = useRecoilValue(UserState);
  const recoilBlogs = useRecoilValue(blogsAtomState);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {recoilBlogs.map((blog: Blog) => {
            return (
              <BlogCard
                key={blog.id}
                title={blog.title}
                authorName={blog.author.name}
                publishedDate={blog.createdAt}
                content={blog.content}
                id={blog.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
