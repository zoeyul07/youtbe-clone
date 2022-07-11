import VideoItem, { Video } from "../videoItem/VideoItem";

interface Props {
  videos: Video[];
}
const VideoList = ({ videos }: Props) => (
  <ul>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);
export default VideoList;
