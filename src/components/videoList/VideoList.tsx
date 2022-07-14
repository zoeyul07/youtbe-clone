import VideoItem, { Video } from "../videoItem/VideoItem";
import styles from "./video_list.module.css";
interface Props {
  videos: Video[];
  onVideoClick: (video: Video) => void;
  display: string;
}
const VideoList = ({ videos, onVideoClick, display }: Props) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);
export default VideoList;
