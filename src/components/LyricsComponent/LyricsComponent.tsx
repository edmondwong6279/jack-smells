import styles from "./LyricsComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const LyricsComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>LYRICS</h2>
      <div className={styles.lyricsContainer}>
        <p>I was a Witch. I transform in the moonlight</p>
        <p>Oh, I was a boy again</p>
        <p>I was in love. I was in love</p>
        <p>I was in love</p>
        <p>
          Though I was a Witch, I was born in the daylight, the light is where I
          live
        </p>
        <p>I was in love. I was in love? I was in love</p>
        <p>I was in love. I was in love? I was in love</p>
        <p>You said "I saved you! I saved you</p>
        <p>And this is how you repay</p>
        <p>You'd do anything for love</p>
        <p>Do anything for love</p>
        <p>You know I held you so tenderly</p>
        <p>Wrapped the fabric tight around me</p>
        <p>'Cause the blue won't show enough</p>
        <p>Do anything for love</p>
        <p>Industry made ghosts in my room</p>
        <p>Awake at night and all I need is you</p>
        <p>Aphrodite got me confused</p>
        <p>O what's a poor boy to do</p>
        <p>I was a Witch. I transform in the moonlight</p>
        <p>Oh, I was a boy again</p>
        <p>I was in love. I was in love</p>
        <p>I was in love</p>
        <p>
          Though I was a Witch, I was born in the daylight, the light is where I
          live
        </p>
        <p>I was in love. I was in love? I was in love</p>
        <p>I was in love. I was in love? I was in love</p>
      </div>
    </div>
  );
};

export default LyricsComponent;
