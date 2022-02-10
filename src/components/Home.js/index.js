import React, { useState } from "react";
import styles from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import oval from "../Images/Oval.png";
import bird from "../Images/bird.png";
import { IoSend } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import PopUp from "./PopUp.js";

export default function Home() {
  const [show, setshow] = useState(false);
  const [open, setopen] = useState(false);
  const [start, setstart] = useState(true);
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ani, setani] = useState(false);

  const handleclick = () => {
    setopen(!open);
  };

  const handlemessage = () => {
    if (inputValue == "") {
      alert("Please enter message");
    } else {
      setdata((data) => [...data, inputValue]);
      setInputValue("");
      setani(true);
      setTimeout(() => {
        handleapicall();
      }, 500);
    }
  };

  const handleapicall = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const json = await response.json();
    setdata((data) => [...data, json.slip.advice]);
    console.log(json.slip.advice);
    setani(false);
  };
  const onKeydown = (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
      handlemessage();
    }
  };
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.heading}>
          <div className={styles.logoname}>Maxeon</div>
          <div className={styles.menu}>
            <ul className={styles.ulnav}>
              <li>Products</li>
              <li>Features</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>
                <button onClick={handleclick}>SignUp</button>
              </li>
            </ul>
          </div>
          <div className={styles.smallmenu}>
            <GiHamburgerMenu size={35} />
          </div>
        </div>
        <div className={styles.container}>
          <p>Where </p>
          <p> words </p>
          <p>fail,</p>
          <p> Music </p>
          <p>speaks.</p>
        </div>

        <div className={styles.search}>
          <span className={styles.search_icon} value="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="dark:text-gray-400 fill-current"
              style={{ minWidth: "24px" }}
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"></path>
            </svg>
          </span>
          <input
            placeholder="Search for Playlists, Albums or Songs"
            type="search"
            className={styles.input_search}
          ></input>
        </div>
        <div className={styles.openchat}>
          <div className={styles.message}>
            <img src={oval} alt="img" />
          </div>
          {show == false ? (
            <div className={styles.bird} onClick={() => setshow(!show)}>
              <img src={bird} alt="img" />
            </div>
          ) : (
            <div className={styles.cancel} onClick={() => setshow(!show)}>
              <MdOutlineCancelScheduleSend size={45} color="green" />
            </div>
          )}
        </div>
        {show == true ? (
          <div className={styles.chatbox}>
            <div className={styles.toparea}>
              <p className={styles.welcome}>Hi There 👋</p>
              <p>Hello Ask Us Anything, Share Your Feedback.</p>
            </div>
            <div className={styles.chat}>
              {start == true ? (
                <>
                  <p className={styles.start}>Start a Conversation</p>
                  <p>The team typically replies in a few minuts.</p>
                </>
              ) : (
                <>
                  <div className={styles.start}>
                    <ul className={styles.chatlist}>
                      {data.map((x, i) => {
                        return <li key={i}>{x}</li>;
                      })}
                    </ul>
                    {ani == true ? (
                      <>
                        <div className={styles.wave}>
                          <span
                            className={`${styles.dot} + ' ' + ${styles.one}`}
                          ></span>
                          <span
                            className={`${styles.dot} + ' ' + ${styles.two}`}
                          ></span>
                          <span
                            className={`${styles.dot} + ' ' + ${styles.three}`}
                          ></span>
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              )}
            </div>
            {start == true ? (
              <>
                <button onClick={() => setstart(false)}>
                  <div className={styles.name}>
                    <div>New Conversation</div>
                    <div>
                      <IoSend size={20} color="white" />
                    </div>
                  </div>
                </button>
              </>
            ) : (
              <>
                <div className={styles.chattextbox}>
                  <div className={styles.textbox}>
                    <input
                      placeholder="Write a reply…"
                      type="text"
                      className={styles.input_search}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={onKeydown}
                    ></input>
                  </div>
                  <div className={styles.btn}>
                    <button onClick={handlemessage}>
                      <div>
                        <IoSend size={20} color="white" />
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.pop}>
        {open ? <PopUp handleClose={handleclick} /> : null}
      </div>
    </>
  );
}
