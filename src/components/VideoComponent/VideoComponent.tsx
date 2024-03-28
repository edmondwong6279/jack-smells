import styles from "./VideoComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const videoArray = [
  {
    vidLink: "https://www.youtube.com/embed/rcUML04Ez_c",
    title: "The People Versus - Lonely Teen",
  },
  {
    vidLink: "https://www.youtube.com/embed/ujAm8AS-Mpw",
    title: "The People Versus - Ocean Family",
  },
  {
    vidLink: "https://www.youtube.com/embed/qEKt2N4ISQk",
    title: "The People Versus - Again and Again",
  },
  {
    vidLink: "https://www.youtube.com/embed/5yzav80eBzI",
    title: "The People Versus - Witch",
  },
];

const VideoComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>VIDEO</h2>
      <div className={styles.gridContainer}>
        {videoArray.map((vidObj, idx) => (
          <div className={styles.item} key={idx}>
            <iframe
              className={styles.iframe}
              src={vidObj.vidLink}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3 className={styles.videoTitle}>{vidObj.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
