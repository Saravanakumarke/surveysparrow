import React from "react";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.copyright}>
        <div className={styles.one}>
          Copyright © maxeon Inc. 2018-19 | Privacy Policy | Terms of Service |
          Sitemap
        </div>
        <div className={styles.two}>Maxeon</div>
      </div>
    </>
  );
}
