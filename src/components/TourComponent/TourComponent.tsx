import styles from "./TourComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const TourComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>TOUR COMPONENT</div>;
};

export default TourComponent;
