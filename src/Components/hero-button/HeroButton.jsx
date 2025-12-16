import React from 'react'
import './HeroButton.css';

export default function HeroButton(
  {
    number,
    text, 
    variant="default", 
    className='', 
    img,
    onclick={},
    ...rest}) {
  return (
    <>
        <button className={`hero-button hero-button--${variant} ${className}`} {...rest}>       
        <span className='hero-button__number'>{number}</span>
        <span className='hero-button__text'>{text}</span>  
        <img
        src={img}
        alt=""/>    
         </button>
    </>
  )
}
