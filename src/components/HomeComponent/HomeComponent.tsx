import styles from "./HomeComponent.module.scss";
import React, { useRef, useState } from "react";
import HeaderComponent from "components/HeaderComponent";
import EmailComponent from "components/EmailComponent";
import MerchComponent from "components/MerchComponent";
import VideoComponent from "components/VideoComponent";
import MusicComponent from "components/MusicComponent";
import TourComponent from "components/TourComponent";
import ThankYouComponent from "components/ThankYouComponent";
import LyricsComponent from "components/LyricsComponent";
import BackgroundComponent from "components/BackgroundComponent";
import FooterComponent from "components/FooterComponent";

type Props = {
  children?: React.ReactNode;
};

const HomeComponent: React.FunctionComponent<Props> = () => {
  const headerRef = useRef<null | HTMLDivElement>(null);
  const emailRef = useRef<null | HTMLDivElement>(null);
  const merchRef = useRef<null | HTMLDivElement>(null);
  const videoRef = useRef<null | HTMLDivElement>(null);
  const musicRef = useRef<null | HTMLDivElement>(null);
  const tourRef = useRef<null | HTMLDivElement>(null);
  const thankRef = useRef<null | HTMLDivElement>(null);
  const lyricRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <BackgroundComponent />
      <div className={styles.topNav}>
        <button
          onClick={() => {
            console.log("button clicked");
            headerRef.current?.scrollIntoView();
          }}
        >
          Home
        </button>
      </div>
      <div className={styles.body}>
        <HeaderComponent ref={headerRef} />
        <EmailComponent ref={emailRef} />
        <MerchComponent ref={merchRef} />
        <VideoComponent ref={videoRef} />
        <MusicComponent ref={musicRef} />
        <TourComponent ref={tourRef} />
        <ThankYouComponent ref={thankRef} />
        <LyricsComponent ref={lyricRef} />
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
