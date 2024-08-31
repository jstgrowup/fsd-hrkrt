import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Navbar from "../components/Blog/Navbar.component";
import BlogTitleInput from "../components/Blog-title.component";
import BlogHeader from "../components/Blog-header.component";
const CreateBlog = () => {
  const editorref = useRef(null);
  const [content, setcontent] = useState<string>("");

  return (
    <>
      <Navbar />
      <div className=" flex justify-center min-h-fit items-center pt-3">
        <div className="h-96 flex flex-col items-left gap-5 ">
          <BlogTitleInput
            label="Title"
            placeholder="Please enter a title for your blog"
            onChange={() => ""}
          />
          <BlogHeader header={"Content"} />

          <JoditEditor
            ref={editorref}
            value={content}
            onChange={(newcontent) => setcontent(newcontent)}
          />

          <button className="w-48 bg-green-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
