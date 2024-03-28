import styles from "./MerchComponent.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import { ComponentType } from "types";

const MerchComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [] = useState();

  return (
    <div ref={ref} className={styles.container}>
      <Link
        href={"https://thepeopleversusmusic.com/merch"}
        className={styles.link}
      >
        Visit Merch Store
      </Link>
    </div>
  );
};

export default MerchComponent;
