import VideoCard from "@/components/videoCar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Gender COntoversy at paris Olympics"}
        author={"Study IQ IAS"}
        views={"46M"}
        image={"/thumb.jpg"}
        thumbnail={"/thumb.jpg"}
      />
    </div>
  );
}
