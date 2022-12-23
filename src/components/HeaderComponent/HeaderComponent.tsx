import styles from "./HeaderComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const HeaderComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>THE PEOPLE VERSUS</h1>
      <h4 className={styles.scroll}>Scroll down to continue.</h4>
    </div>
  );
};

export default HeaderComponent;
