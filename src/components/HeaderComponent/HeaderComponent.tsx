import styles from "./HeaderComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const HeaderComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.header}>THE PEOPLE VERSUS</h1>
      <h4 className={styles.scroll}>Scroll down to continue.</h4>
    </div>
  );
};

export default HeaderComponent;
