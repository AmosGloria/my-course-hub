import React from 'react'

export default function DisplayTotal({
    img,
    number,
    description,
    variant,
     className="",
}) {
  return (
    <div>
        <div className='total-wrapper'>
            <img 
            src={img}
            alt=""
            />
        </div>
        <p>{number}</p>
        <p>{description}</p>
    </div>
  )
}
