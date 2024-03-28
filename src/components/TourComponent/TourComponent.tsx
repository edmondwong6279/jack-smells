import styles from "./TourComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const TourComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>Tour</h2>
      <p>
        Need this:
        https://support.songkick.com/hc/en-us/articles/360012785073-Add-concerts-to-your-website-with-the-Tourbox-website-widget
      </p>
    </div>
  );
};

export default TourComponent;
