import React from "react";
import styles from "./style.module.css";
import images from "../Images/rocket.png";
import { TiTickOutline } from "react-icons/ti";

function Rocket() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.rocketimg}>
            <img src={images} alt="img" />
          </div>
          <div className={styles.right}>
            <h5>Accusantium doloremque laudantium</h5>
            <div className={styles.sublist}>
              <div className={styles.eventname}>
                <ul>
                  <li>
                    <div className={styles.name}>
                      <div>
                        <TiTickOutline size={30} />
                      </div>
                      <div>Neque porro quisquam</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.name}>
                      <div>
                        <TiTickOutline size={30} />
                      </div>
                      <div>Neque porro quisquam</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.case}>
                <ul>
                  <li>
                    <div className={styles.name}>
                      <div>
                        <TiTickOutline size={30} />
                      </div>
                      <div>Neque porro quisquam</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.name}>
                      <div>
                        <TiTickOutline size={30} />
                      </div>
                      <div>Neque porro quisquam</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rocket;
