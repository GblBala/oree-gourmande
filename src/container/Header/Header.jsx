import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="L'excellent à portée de main"/>
      <h1 className='app__header-h1'>La Clé du Délice</h1>
      <p className='p__opensans' style={{margin: ' 2rem 0'}} >Bienvenue à l'Orée Gourmande, un trésor culinaire où l'amour pour la cuisine et les recettes familiales se transmet de génération en génération. Notre histoire est tissée de saveurs qui racontent des traditions riches en héritage et en passion pour l'art de bien manger.</p>
      <button type="button" className='custom__button'>Explorer Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome Image" />
    </div>
  </div>
);

export default Header;
