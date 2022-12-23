import styles from "./MerchComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const MerchComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>LYRICS COMPONENT</div>;
};

export default MerchComponent;
