import React from "react";
const VideoCard = (props) => {
  // 2k-2.5k
  return (
    <div className="p-2">
      <img src={props.thumbnail} alt="" className="rounded-xl " />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1  h-12 w-12">
          <img src={props.image} alt="" className="rounded-full h-12 w-20" />
        </div>
        <div className="col-span-11 pl-8">
          <p> {props.title}</p>
          <p className="text-gray-400 text-base">{props.author}</p>
          <p className="text-gray-400 text-base">{props.views}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
