import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/VideoList";
import SearchHeader from "./components/search_header/SearchHeader";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  //두번째 인자로 빈배열 사용시 컴포넌트 마운트 될 때 단 한번만 업데이트
  //두번째 인자로 아무것도 넘기지 않을 시 state, props가 변경될 때마다 업데이트
  //두번째 인자로 특정 변수 지정시, 그 변수가 바뀔때마다 업데이트

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
