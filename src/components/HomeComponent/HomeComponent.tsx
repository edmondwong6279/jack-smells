import styles from "./HomeComponent.module.scss";
import React, { useState } from "react";
import HeaderComponent from "components/HeaderComponent";
import EmailComponent from "components/EmailComponent";
import MerchComponent from "components/MerchComponent";
import VideoComponent from "components/VideoComponent";
import MusicComponent from "components/MusicComponent";
import TourComponent from "components/TourComponent";
import ThankYouComponent from "components/ThankYouComponent";
import LyricsComponent from "components/LyricsComponent";
import BackgroundComponent from "components/BackgroundComponent";

type Props = {
  children?: React.ReactNode;
};

const HomeComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return (
    <div className={styles.container}>
      <BackgroundComponent />
      <div className={styles.test}>
        <HeaderComponent />
        <EmailComponent />
        <MerchComponent />
        <VideoComponent />
        <MusicComponent />
        <TourComponent />
        <ThankYouComponent />
        <LyricsComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
