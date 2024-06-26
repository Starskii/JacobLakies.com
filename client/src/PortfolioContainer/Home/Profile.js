import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import './Profile.css'

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: ["Software Engineer", "Fullstack Developer", "Machine Learning Engineer", "Robotics Enthusiast"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
    delaySpeed: 3000
  })
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://github.com/Starskii' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-github-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/jacob-lakies' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-linkedin-square'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Jacob <span className='highlighted-text'>Lakies</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                I'm a {typeEffect} {" "}
              </h1>
              <span className='profile-role-tagline'>
                A software engineer with hands-on experience with robotics, machine learning, and fullstack (MERN) development.
              </span>
            </span>
            <div className='profile-options'>
              <button className='btn primary-btn'>
                {" "}
                Contact Me {" "}
              </button>
              <a href='JacobLakiesSoftwareDeveloper.pdf' download='JacobLakiesSoftwareDeveloper.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
          <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

