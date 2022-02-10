import React from "react";
import styles from "./style.module.css";
import { BsPlayFill } from "react-icons/bs";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import four from "../Images/four.png";

export default function Play() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.first}>
            <div className={styles.imagone}>
              <img src={one} alt="img" />
            </div>
            <div className={styles.imagtwo}>
              <img src={two} alt="img" />
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.imagone}>
              <img src={three} alt="img" />
            </div>
            <div className={styles.imagtwo}>
              <img src={four} alt="img" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h5>EVOLVE.</h5>
          <h5 className={styles.two}> EXPLORE.</h5>
          <p>
            All the pods you hold dear, find them here first. From chart toppers
            to newly discovered gems.
          </p>
          <div className={styles.centerbb}>
            <button>
              <div className={styles.name}>
                <div>
                  <BsPlayFill size={23} color="white" />
                </div>
                <div>Listen Now</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
