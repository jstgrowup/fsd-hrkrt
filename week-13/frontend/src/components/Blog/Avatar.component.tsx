const BlogCardAvatar = ({ name, size }: { name: string; size?: number }) => {
  console.log("size:", size);
  return (
    <div
      className={`relative w- inline-flex items-center justify-center w-[calc(${size}px)] h-[calc(${size}px)] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="font-semibold text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};

export default BlogCardAvatar;
