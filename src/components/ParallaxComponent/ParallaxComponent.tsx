import styles from './ParallaxComponent.module.scss';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode
}

const ParallaxComponent: React.FunctionComponent<Props> = () => {

  const background1: BannerLayer = {
    translateY: [0, 20],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    speed: -30,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/1. Sky Top Half.webp'} />
    )
  };

  const background2: BannerLayer = {
    translateY: [10, 0],
    scale: [1, 1.1, "easeOutCubic"],
    speed: -20,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/2. Hill Background Top Half.webp'} />
    )
  };

  const headline: BannerLayer = {
    translateY: [20, 120],
    scale: [1, 1.5, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={styles.textContainer}>
        <h1 className={styles.header}>
          THE PEOPLE VERSUS
        </h1>
      </div>
    ),
  };

  const background3: BannerLayer = {
    translateY: [20, 0],
    speed: -10,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/3. Foreground Top Half.webp'} />
    )
  };

  const gradientOverlay: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className={classNames(styles.grad, styles.top)} />
  };


  const gradientOverlayBottom: BannerLayer = {
    speed: 0,
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className={classNames(styles.grad, styles.bottom)} />
  };

  const background4: BannerLayer = {
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/5. Sky Bottom Half.webp'} />
    )
  };

  const background5: BannerLayer = {
    translateY: [0, -50],
    scale: [1, 1.1, "easeOutCubic"],
    speed: -20,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/6. Background Bottom half.webp'} />
    )
  };

  const background6: BannerLayer = {
    translateY: [0, -80],
    speed: -10,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <img className={styles.image} src={process.env.PUBLIC_URL + '/7. Foreground Bottom Half.webp'} />
    )
  };


  return (
    <div className={styles.container}>
      <ParallaxBanner
        layers={[background1, background2, headline, background3, gradientOverlay]}
        className={styles.bannerContainer}
      />
      <div className={styles.middle}>Middle bit</div>
      <ParallaxBanner
        layers={[background4, background5, background6, gradientOverlayBottom]}
        className={classNames(styles.bannerContainer, styles.bottom)}
      />
    </div>
  );
}

export default ParallaxComponent;
