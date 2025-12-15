import React from 'react';
import './HeroPage.css';
import Flower from '../../assets/Images/flower.svg';
import Cancel from '../../assets/Images/cancel.svg';
import KidPicture1 from '../..//assets/Images/kid-picture1.svg';
import Symbol from '../..//assets/Images/symbol.svg';
import SunImage from '../..//assets/Images/sun-image.svg';
import HeroButton from '../hero-button/HeroButton';

export default function HeroPage() {
  return (
    <>
       <section className='hero-container'>
            <img src={Flower} alt="flower" />
                <p className='hero-container__text'>
                    The Best Place TO Learn and Play For Kids
                </p>
                    <p className='hero-container__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                        <img src={Cancel} alt="cancel-icon" className="hero-container__cancel"/>
                          <img src={Symbol} alt="symbol-icon" className="hero-container__symbol"/>
                            <div className='hero-container__picture-container'>
                                 <img src={KidPicture1} alt="kid-picture1" className='hero-container__kid-picture1'/>
                            </div>
                            <img src={SunImage} alt="sun-icon" className="hero-container__sun"/>
                        <HeroButton
                        number="5.8"
                        text="success courses"
                        className="hero-container__button"
                        variant='default'/>
        </section> 
    </>
  )
}
