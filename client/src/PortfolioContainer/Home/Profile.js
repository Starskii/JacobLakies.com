import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <a href='https://github.com/Starskii' target="_blank" rel="noopener noreferrer">
              <i className='fa fa-github-square'></i>
            </a>
            <a href='https://www.linkedin.com/in/jacob-lakies' target="_blank" rel="noopener noreferrer">
              <i className='fa fa-linkedin-square'></i>
            </a>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Jacob <span className='highlighted-text'>Lakies</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

