import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import styles from "./BackgroundComponent.module.scss";
import classNames from "classnames";

export const background1: BannerLayer = {
  translateY: [0, -40],
  opacity: [1, 0.3],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg1)} />,
};

export const background2: BannerLayer = {
  translateY: [40, 10],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg2)} />,
};

export const background3: BannerLayer = {
  translateY: [20, 0],
  scale: [1, 1.2, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg3)} />,
};

export const gradientOverlay: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: <div className={classNames(styles.grad, styles.top)} />,
};

export const gradientOverlayBottom: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: <div className={classNames(styles.grad, styles.bottom)} />,
};

export const background5: BannerLayer = {
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg5)} />,
};

export const background6: BannerLayer = {
  translateY: [0, -30],
  // scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg6)} />,
};

export const background7: BannerLayer = {
  translateY: [0, -40],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg7)} />,
};
