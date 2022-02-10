import React from "react";
import styles from "./style.module.css";
import imgages from "../Images/Vector.png";

export default function Listfe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Ut enim ad minima </h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis
          </p>
        </div>{" "}
        <div className={styles.feature}>
          <div className={styles.box}>
            <h5>dolores eos qui ratione </h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
          </div>
          <div className={styles.imgcon}>
            <img src={imgages} alt="img" />
          </div>
          <div className={styles.box}>
            <h5>dolores eos qui ratione</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
          </div>
          <div className={styles.imgcon}>
            <img src={imgages} alt="img" />
          </div>
          <div className={styles.box}>
            <h5>dolores eos qui ratione</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
