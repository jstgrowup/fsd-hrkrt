import React from "react";

const VideoCard = (props) => {
  return (
    <div>
      <img src={props.thumbnail} alt="" className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.image} alt="" className="rounded-full h-16 w-16" />
        </div>
        <div className="col-span-11 pl-2">
          <p> {props.title}</p>
          <p className="text-gray-400 text-base">{props.author}</p>
          <p className="text-gray-400 text-base">{props.views}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
