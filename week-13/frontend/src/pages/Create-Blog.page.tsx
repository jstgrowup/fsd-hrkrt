import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Navbar from "../components/Blog/Navbar.component";
import BlogTitleInput from "../components/Blog-title.component";
import BlogHeader from "../components/Blog-header.component";
import { BlogBodyInterface } from "../utils/Types-interfaces";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { blogAtomState, createBlogSelector } from "../recoil/blog.atom";
const CreateBlog = () => {
  const editorref = useRef(null);

  const [blog, setblog] = useState<BlogBodyInterface>({
    title: "",
    content: "",
    published: false,
  });

  const createBlog = useSetRecoilState(createBlogSelector);
  const currentBlogAtomState = useRecoilValue(blogAtomState);

  return (
    <>
      <Navbar />
      <div className=" flex justify-center min-h-fit items-center pt-3">
        <div className="h-96 flex flex-col items-left gap-5 ">
          <BlogTitleInput
            label="Title"
            placeholder="Please enter a title for your blog"
            onChange={(e) => setblog({ ...blog, title: e.target.value })}
          />
          <BlogHeader header={"Content"} />

          <JoditEditor
            ref={editorref}
            value={blog.content}
            onChange={(newcontent) => setblog({ ...blog, content: newcontent })}
          />

          <button
            onClick={() => createBlog(blog)}
            className="w-48 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {currentBlogAtomState.loading ? "Publishing..." : "Publish"}
          </button>
          {currentBlogAtomState.error && (
            <p>Error: {currentBlogAtomState.error}</p>
          )}
          {currentBlogAtomState.success && <p>Blog created successfully!</p>}
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
