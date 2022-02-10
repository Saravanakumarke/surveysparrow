import React from "react";
import styles from "./style.module.css";

export default function PopUp(props) {
  return (
    <>
      <div className={styles.popupbox}>
        <div className={styles.box}>
          <span className={styles.closeicon} onClick={props.handleClose}>
            x
          </span>
          <div className={styles.signup}>
            <h5>Sign Up</h5>

            <p>Full Name:</p>
            <div className={styles.textbox}>
              <input
                placeholder="First and LAst Name"
                type="text"
                className={styles.input_search}
              ></input>
            </div>
            <p>email:</p>
            <div className={styles.textbox}>
              <input
                placeholder="saravanaeswari@gmail.com"
                type="email"
                className={styles.input_search}
              ></input>
            </div>
            <p>Password</p>
            <div className={styles.textbox}>
              <input
                placeholder="Password"
                type="password"
                className={styles.input_search}
              ></input>
            </div>
            <p>Confirm Password</p>
            <div className={styles.textbox}>
              <input
                placeholder="Re-enter password"
                type="password"
                className={styles.input_search}
              ></input>
            </div>
            <button>Sign Up</button>
            <div className={styles.info}>
              By signing up, you agree to our Terms of Service & Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
