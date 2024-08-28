import { useRecoilValue } from "recoil";
import BlogCard from "../components/Blog/Blog-card.component";
import Navbar from "../components/Blog/Navbar.component";
import { UserState } from "../recoil/atoms";

const Blogs = () => {
  const userToken = useRecoilValue(UserState);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            title="How can Ugly single-page website makes $5000 a Month with affiliate marketing"
            authorName="Peter V"
            publishedDate="Dec 3 2023"
            content="No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man  No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man...."
          />
          <BlogCard
            title="How can Ugly single-page website makes $5000 a Month with affiliate marketing"
            authorName="Peter V"
            publishedDate="Dec 3 2023"
            content="No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man  No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man...."
          />
          <BlogCard
            title="How can Ugly single-page website makes $5000 a Month with affiliate marketing"
            authorName="Peter V"
            publishedDate="Dec 3 2023"
            content="No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man  No need to create a fancy and modern website with hundreds of pages to make modeny online makeing only online is the dream fro man...."
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
