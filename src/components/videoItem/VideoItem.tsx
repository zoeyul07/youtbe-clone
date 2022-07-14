import styles from "./video_item.module.css";

export interface Video {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface Props {
  video: Video;
  onVideoClick: (video: Video) => void;
  display: string;
}

const VideoItem = ({
  video,
  video: { snippet },
  onVideoClick,
  display,
}: Props) => {
  const displayType = display === "list" ? styles.list : styles.grid;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
