import styles from "./MusicComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const MusicComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>MUSIC COMPONENT</div>;
};

export default MusicComponent;
