import React, { useState, useEffect } from "react";
import "./ContactMe.css";
import imgBack from "../../assets/ContactMe/mailz.jpeg";
import loadingBar from "../../assets/ContactMe/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useTypewriter } from "react-simple-typewriter";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  const [typeEffect] = useTypewriter({
    words: [" collaborate", " connect", " work together"],
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 3000,
    loop: {},
  });

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [props.id]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/api/contact", data);
      if (name.length <= 0 || email.length <= 0 || message <= 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Get in Touch!"} title={"Contact Me"} />
      <div className="central-form">
        <img src={imgBack} className="form-bg" alt="Background" />
        <div className="col">
          <h2>Let's {typeEffect}</h2>
          <a
            href="https://github.com/Starskii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-lakies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
          <div className="back-form">
            <div className="img-back">
              <h4>Send Your Email Here!</h4>
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <fieldset>
                <legend htmlFor="name_input">Name</legend>
                <input
                  type="text"
                  onChange={handleName}
                  value={name}
                  id="name_input"
                />

                <legend htmlFor="email_input">Email</legend>
                <input
                  type="text"
                  onChange={handleEmail}
                  value={email}
                  id="email_input"
                />

                <legend htmlFor="message_input">Message</legend>
                <textarea
                  type="text"
                  onChange={handleMessage}
                  id="message_input"
                  value={message}
                />
              </fieldset>

              <div className="send-btn">
                <button type="submit">
                  Send <i className="fa fa-paper-plane" />
                  {bool ? (
                    <b className="load">
                      <img src={loadingBar} alt="Image Not Found!" />
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
