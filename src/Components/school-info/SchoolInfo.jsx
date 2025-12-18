import React from 'react'
import './SchoolInfo.css';
import SchoolInfoBoxImg from "../..//assets/Images/school-info-box.svg";

export default function SchoolInfoBox({img, info}) {
  return (
    <>
        <div className='school-info-box'>
        <img
        src={SchoolInfoBoxImg}
        alt="school info box"/> 
            <p>{info}</p>
        </div>   
    </>
  )
}
