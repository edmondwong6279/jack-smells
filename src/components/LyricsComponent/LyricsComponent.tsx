import styles from "./LyricsComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const LyricsComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>LYRICS COMPONENT</div>;
};

export default LyricsComponent;
