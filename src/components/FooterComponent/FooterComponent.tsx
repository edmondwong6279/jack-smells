import styles from "./FooterComponent.module.scss";
import React, { useState } from "react";

const FooterComponent: React.FunctionComponent = ({}) => {
  const [] = useState();

  return (
    <div className={styles.container}>
      <p>Created by Ed Wong</p>
    </div>
  );
};

export default FooterComponent;
