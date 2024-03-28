import styles from "./MusicComponent.module.scss";
import React, { useState } from "react";
import { ComponentType } from "types";

const playlistArray = [
  {
    link: "https://open.spotify.com/embed/playlist/3xIIOyvZw134Uny94oSPRL",
  },
  {
    link: "https://open.spotify.com/embed/playlist/3WVXYtyON5U7J9TNE7Tf6I",
  },
  {
    link: "https://open.spotify.com/embed/playlist/0T5YXis6a10XWRPZ1wOhRi",
  },
];

const MusicComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>MUSIC</h2>
      <div className={styles.gridContainer}>
        {playlistArray.map((playlist, idx) => (
          <iframe
            key={idx}
            className={styles.playlist}
            src={playlist.link}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default MusicComponent;
