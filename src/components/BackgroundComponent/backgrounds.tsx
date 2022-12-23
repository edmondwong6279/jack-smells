import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import styles from "./BackgroundComponent.module.scss";
import classNames from "classnames";

export const background1: BannerLayer = {
  translateY: [0, 20],
  opacity: [1, 0.3],
  scale: [1, 1.05, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg1)} />,
};

export const background2: BannerLayer = {
  translateY: [10, 0],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg2)} />,
};

export const background3: BannerLayer = {
  translateY: [30, -20],
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
  // translateY: [50, -30],
  // scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg6)} />,
};

export const background7: BannerLayer = {
  // translateY: [30, -15],
  shouldAlwaysCompleteAnimation: true,
  children: <div className={classNames(styles.background, styles.bg7)} />,
};
