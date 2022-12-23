import styles from "./VideoComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const VideoComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>VIDEO COMPONENT</div>;
};

export default VideoComponent;
