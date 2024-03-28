import styles from "./BackgroundComponent.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import {
  background1,
  background2,
  background3,
  gradientOverlay,
  background5,
  background6,
  background7,
  gradientOverlayBottom,
} from "components/BackgroundComponent/backgrounds";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

type Props = {
  children?: React.ReactNode;
};

const BackgroundComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return (
    <div className={styles.container}>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[background1, background2, background3, gradientOverlay]}
          className={styles.bannerContainer}
        />
        <div className={styles.middle} />
        <ParallaxBanner
          layers={[
            gradientOverlayBottom,
            background5,
            background6,
            background7,
          ]}
          className={classNames(styles.bannerContainer, styles.bottom)}
        />
      </ParallaxProvider>
    </div>
  );
};

export default BackgroundComponent;
