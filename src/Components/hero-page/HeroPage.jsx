import React from "react";
import "./HeroPage.css";
import Flower from "../../assets/Images/flower.svg";
import Cancel from "../../assets/Images/cancel.svg";
import KidPicture1 from "../..//assets/Images/kid-picture1.svg";
import Symbol from "../..//assets/Images/symbol.svg";
import SunImage from "../..//assets/Images/sun-image.svg";
import HeroButton from "../hero-button/HeroButton";
import KidPicture2 from '../..//assets/Images/kid-picture2.svg';
import Watch from '../..//assets/Images/watch.svg';
import YellowLayout from '../..//assets/Images/yellow-layout.svg';
import { useNavigate} from 'react-router-dom' ;

export default function HeroPage() {
    const navigate =useNavigate();
   const handleBrowseCourse =()=>{   
    navigate('./courses')
   }
  return (
    <>
      <section className="hero-container">
        <img src={Flower} alt="flower" />
        <p className="hero-container__text">
          The Best Place TO Learn and Play For Kids
        </p>
        <p className="hero-container__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

            <div className="browse-courses">
                  <HeroButton
          text="browse courses"
          className="hero-container__button2"
          variant="primary"
          onClick={handleBrowseCourse}
        />
            <div className="browse-courses__watch">
                <img
          src={Watch}
          alt="watch-icon"
        />
            </div>
            <div>
                <a
  href="https://www.figma.com/design/Nx4sNsAeWJfmVVOXuDSmxJ/Untitled?node-id=2-2093&t=GYaZvvcXD495tX0y-0"
  className="browse-courses__link"
  target="_blank"
  rel="noopener noreferrer"
>
  Watch Now
</a>

            </div>
        </div>
      <img 
      src={YellowLayout}
      alt="yellow-layout"
      className="yellow-layout"
      />

        <img
          src={Cancel}
          alt="cancel-icon"
          className="hero-container__cancel"
          
        />
        <img
          src={Symbol}
          alt="symbol-icon"
          className="hero-container__symbol"
        />
        <div className="hero-container__picture-container">
          <img
            src={KidPicture1}
            alt="kid-picture1"
            className="hero-container__kid-picture1"
          />
        </div>
        <img src={SunImage} alt="sun-icon" className="hero-container__sun" />
        <HeroButton
          number="5.8"
          text="success courses"
          className="hero-container__button"
          variant="default"
        />

        <div className="hero-container__picture2-container">
              <img
          src={KidPicture2}
          alt="kid picture2"
          className="hero-container__picture2"
        />
        </div>
      </section>
    </>
  );
}
