import styles from "./ThankYouComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const ThankYouComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>THANK YOU COMPONENT</div>;
};

export default ThankYouComponent;
