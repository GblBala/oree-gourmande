import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper__img_reverse'>
      <img src={images.chef} alt="Chef" />
    </div>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Les mots du Chef" />
      <h1 className='headtext__cormorant'>Nos valeures partagées</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='Quote' />
          <p className='p__opensans'>Bienvenue dans notre restaurant ! </p>
        </div>
        <p className='p__opensans'>Chaque plat que vous découvrez ici est préparé avec passion et soin, mettant en valeur les meilleurs ingrédients de notre région. Mon équipe et moi-même nous engageons à vous offrir une expérience culinaire inoubliable. Merci de partager ce moment avec nous. Bon appétit !</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="Chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
