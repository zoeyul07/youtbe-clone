import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videoList/VideoList";
function App() {
  const [videos, setVideos] = useState([]);

  //두번째 인자로 빈배열 사용시 컴포넌트 마운트 될 때 단 한번만 업데이트
  //두번째 인자로 아무것도 넘기지 않을 시 state, props가 변경될 때마다 업데이트
  //두번째 인자로 특정 변수 지정시, 그 변수가 바뀔때마다 업데이트
  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
    console.log("useEffect");
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
