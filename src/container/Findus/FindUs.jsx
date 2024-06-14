import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Nous Trouver</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Adresse </p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Horaires d'ouvertures</p>
        <p className='p__opensans'>Lun - Ven: 10:00 - 02:00</p>
        <p className='p__opensans'>Sam - Dim: 10:00 - 03:00</p>
      </div>
      <button type="button" className='custom__button' style={{marginTop: '2rem'}}>Réserver</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='FindUs' />
    </div>
    FindUs
  </div>
);

export default FindUs;
