import React, { useState } from "react";
import "./ContactMe.css";
import imgBack from "../../assets/ContactMe/mailz.jpeg";
import loadingBar from "../../assets/ContactMe/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useTypewriter } from "react-simple-typewriter";

export default function ContactMe(props) {
  const [typeEffect] = useTypewriter({
    words: [" collaborate", " connect", " work together"],
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 3000,
    loop: {}
  });

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Get in Touch!"} title={"Contact Me"} />
      <div className="central-form">
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
              <img src={imgBack} alt='Image not found!' />
            </div>
            <form>
              <p>{banner}</p>
              <label htmlFor='name'>Name</label>
              <input type='text' 
              onChange={handleName}
              value={name}
              />

              <label htmlFor='email'>Email</label>
              <input type='text' 
              onChange={handleEmail}
              value={email}
              />

              <label htmlFor='message'>Message</label>
              <textarea type='text' 
              onChange={handleMessage}
              value={message}
              />

              <div className="send-btn">
                <button type="submit">
                  Send <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
