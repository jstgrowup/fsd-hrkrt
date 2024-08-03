import React from "react";
import VideoCard from "./VideoCard";
const VIDEOS = [
  {
    title: "Gender Controversy at paris Olympics",
    author: "Study IQ IAS",
    views: "46M",
    image: "/thumb.jpg",
    thumbnail: "/thumb.jpg",
  },
  {
    title: "Gender Controversy at paris Olympics",
    author: "Study IQ IAS",
    views: "46M",
    image: "/thumb.jpg",
    thumbnail: "/thumb.jpg",
  },
  {
    title: "Gender Controversy at paris Olympics",
    author: "Study IQ IAS",
    views: "46M",
    image: "/thumb.jpg",
    thumbnail: "/thumb.jpg",
  },
  {
    title: "Bollywood controversy",
    author: "Neon Man",
    views: "46M",
    image: "/neonMan.jpg",
    thumbnail: "/neonMan.jpg",
  },
  {
    title: "Bollywood controversy",
    author: "Neon Man",
    views: "46M",
    image: "/neonMan.jpg",
    thumbnail: "/neonMan.jpg",
  },
  {
    title: "Bollywood controversy",
    author: "Neon Man",
    views: "46M",
    image: "/neonMan.jpg",
    thumbnail: "/neonMan.jpg",
  },
  {
    title: "Please Stop this ! INDIA",
    author: "Dimpu Baruah",
    views: "12k",
    image: "/dimpu.jpg",
    thumbnail: "/dimpu.jpg",
  },
  {
    title: "Please Stop this ! INDIA",
    author: "Dimpu Baruah",
    views: "12k",
    image: "/dimpu.jpg",
    thumbnail: "/dimpu.jpg",
  },
  {
    title: "Please Stop this ! INDIA",
    author: "Dimpu Baruah",
    views: "12k",
    image: "/dimpu.jpg",
    thumbnail: "/dimpu.jpg",
  },
];
const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => {
        return <VideoCard {...video} />;
      })}
    </div>
  );
};

export default VideoGrid;
