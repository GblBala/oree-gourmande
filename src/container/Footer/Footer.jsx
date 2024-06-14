import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact</h1>
        <p className='p__opensans'>Adresse</p>
        <p className='p__opensans'>+33 3 74 20 48 03</p>
        <p className='p__opensans'>+33 9 02 39 17 40</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.oree} alt='footer logo' />
        <p className='p__opensans'>"Le meilleur moyen de vous trouver est de vous perdre dans le service des autres."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Horaires</h1>
        <p className='p__opensans'>Lundi - Vendredi :</p>
        <p className='p__opensans'>08:00 - 12:00</p>
        <p className='p__opensans'>Samedi - Dimanche :</p>
        <p className='p__opensans'>07:00 - 11:00</p>

      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>© 2024 Orée Gourmande. Tous droits réservés.</p>
    </div>

  </div>
);

export default Footer;
