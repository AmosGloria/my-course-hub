import React from 'react';
import './CourseInfo.css'

export default function CourseInfo(
    {
    img,
    heading,
    description,
    variant,
    className="",
    }
) {
  return (
    <>
        <div className={`course-info-container course-info-container--${variant} ${className}`}>
      <div className='course-info-container__img-container course-info-container__img-container--primary'>
          <img
        src={img}
        alt=""
        />
      </div>
        <h1>{heading}</h1>
        <p className='course-info-container__description'>{description}</p>
        
        </div>
    </>
  )
}
