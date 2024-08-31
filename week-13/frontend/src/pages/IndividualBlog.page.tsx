import { useRecoilValue } from "recoil";
import { blogAtomFamily } from "../recoil/blog.atom";
import { useParams } from "react-router-dom";
import Blog from "../components/Blog/Blog.component";
import type { BlogType } from "../utils/Types-interfaces";

const IndividualBlog = () => {
  const { id } = useParams();
  const blog: BlogType | undefined = useRecoilValue(blogAtomFamily(id));

  return (
    <div>
      <Blog {...blog} />
    </div>
  );
};

export default IndividualBlog;
