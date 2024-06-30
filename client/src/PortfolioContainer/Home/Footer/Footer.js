import React from 'react'
import './Footer.css'
import backgroundshape from '../../../assets/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={(backgroundshape)}
            alt='no internet connection'></img>
        </div>
    </div>
  )
}
