import React from "react";
import { Avatar } from "./Avatar.component";
import { BlogCardProps } from "../../utils/Types-interfaces";
import { Link } from "react-router-dom";

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  authorName,
  content,
  publishedDate,
  id,
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-400 pb-4 pt-4">
        <div className="flex gap-3">
          <div className="flex justify-between items-center ">
            <Avatar size={"big"} name="subham" />
          </div>
          <div className="font-extralight">{authorName}</div>
          <div className="font-light text-slate-500">.{publishedDate}</div>
        </div>
        <div className="font-semibold text-2xl pt-2">{title}</div>
        <div className="font-thin text-md">{content.slice(1, 100) + "..."}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
