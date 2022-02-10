import React from "react";
import styles from "./style.module.css";
import imgages from "../Images/Frame.png";

export default function Minima() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h3>Ut enim ad minima </h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.box}>
            <h5>Consequuntur magni </h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia{" "}
            </p>
          </div>
          <div className={styles.imgcon}>
            <img src={imgages} alt="img" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imgcon}>
            <img src={imgages} alt="img" />
          </div>
          <div className={styles.content}>
            <div className={styles.box}>
              <h5>Consequuntur magni </h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.box}>
            <h5>Consequuntur magni </h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia{" "}
            </p>
          </div>
          <div className={styles.imgcon}>
            <img src={imgages} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
