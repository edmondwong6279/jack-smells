import styles from "./EmailComponent.module.scss";
import React, { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const EmailComponent: React.FunctionComponent<Props> = () => {
  const [] = useState();

  return <div className={styles.container}>EMAIL COMPONENT</div>;
};

export default EmailComponent;
