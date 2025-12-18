import React from 'react'
import './DisplayTotal.css'

export default function DisplayTotal({
    img,
    number,
    description,
    variant,
    className = "", 
}) {
  return (
    <div className={`total-wrapper ${className}`}>
        <div className='total-img-wrapper'>
            <img 
                src={img}
                alt="Total Image"
                className='total-wrapper__img'
            />
        </div>
       <div>
         <p className='total-wrapper__number'>{number}</p>
        <p className='total-wrapper__description'>{description}</p>
       </div>
    </div>
  )
}
