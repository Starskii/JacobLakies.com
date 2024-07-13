import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className='home-container' id={props.id || ''}>
      <Header />
      <Profile /> 
      <Footer />
    </div>
  )
}
