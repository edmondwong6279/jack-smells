import styles from "./ThankYouComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const peopleArray = [
  "Rik E",
  "Rik E",
  "Rik E",
  "Rik E",
  "Rik E",
  "Rik E",
  "Rik E",
  "Rik E",
];

const ThankYouComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>THANK YOU</h2>
      <div className={styles.listContainer}>
        {peopleArray.map((person, idx) => (
          <p key={idx}>{person}</p>
        ))}
      </div>
    </div>
  );
};

export default ThankYouComponent;
