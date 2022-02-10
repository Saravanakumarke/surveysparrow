import React from "react";
import styles from "./style.module.css";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h5 className={styles.one}>LIVE SPORTS.</h5>
          <h5 className={styles.two}> MUSIC.</h5>
          <h5 className={styles.three}> NEWS.</h5>
          <h5 className={styles.four}> PODCASTS.</h5>
        </div>
        <div className={styles.right}>
          <ul>
            <li className={styles.active}>emuse brings you live sports</li>
            <li>emuse brings you live sports</li>
            <li>emuse brings you live sports</li>
            <li>emuse brings you live sports</li>
          </ul>
        </div>
      </div>
    </>
  );
}
