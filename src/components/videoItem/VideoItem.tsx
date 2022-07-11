export interface Video {
  id: string;
  snippet: {
    title: string;
  };
}

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => <h1>{video.snippet.title}</h1>;
export default VideoItem;
