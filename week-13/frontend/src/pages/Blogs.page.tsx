import { useRecoilValue } from "recoil";
import BlogCard from "../components/Blog/Blog-card.component";
import Navbar from "../components/Blog/Navbar.component";
import { UserState } from "../recoil/atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Blog } from "../utils/Types-interfaces";
const Blogs = () => {
  const userToken = useRecoilValue(UserState);
  const [blogs, setblogs] = useState<Blog[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const token = Cookies.get("token");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DEV_BACKEND_URL}/api/v1/blog/get/bulk`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setblogs(response.data.data);
      })
      .catch((er) => console.log(er))
      .finally(() => setloading(false));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog: Blog) => {
            return (
              <BlogCard
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
