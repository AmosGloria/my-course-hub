import React from 'react';
import './LearningImgWrapper.css';
import LearningBackground from "../../assets/Images/learning-background.svg";
import LearningFlower from "../../assets/Images/learning-flower.svg";
import LearningImg from "../../assets/Images/learning-img.jpg";

export default function LearningImgWrapper() {
  return (
    <div className="learning-img-wrapper" >
      <img src={LearningImg} alt="learning"
      className='learning-img-wrapper__image1'/>
    <div>
        <img src={LearningBackground}
         alt="background" 
         className='learning-img-wrapper__image2'/>
    </div>
    

    </div>
  );
}

