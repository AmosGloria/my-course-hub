import React from "react";
import "./HeroPage.css";
import Flower from "../../assets/Images/flower.svg";
import Cancel from "../../assets/Images/cancel.svg";
import KidPicture1 from "../..//assets/Images/kid-picture1.svg";
import Symbol from "../..//assets/Images/symbol.svg";
import SunImage from "../..//assets/Images/sun-image.svg";
import HeroButton from "../hero-button/HeroButton";
import KidPicture2 from "../..//assets/Images/kid-picture2.svg";
import Watch from "../..//assets/Images/watch.svg";
import YellowLayout from "../..//assets/Images/yellow-layout.svg";
import GroupedPicture from "../..//assets/Images/grouped-picture.svg";
import CourseInfo from "../course-info/CourseInfo";
import CourseInfoImg from "../..//assets/Images/course-info-img.svg";
import KidPicture3 from "../..//assets/Images/kid-picture3.svg";
import KidPicture4 from "../..//assets/Images/kid-picture4.svg";
import RedCircle from "../..//assets/Images/red-circle.svg";
import AboutUsImg from "../..//assets/Images/about-us-img.svg";
import SchoolInfoBox from "../school-info-box/schoolInfoBox";
import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  const navigate = useNavigate();
  const handleBrowseCourse = () => {
    navigate("./courses");
  };
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
            <img src={Watch} alt="watch-icon" />
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
        <img src={YellowLayout} alt="yellow-layout" className="yellow-layout" />

        <HeroButton
          number="10K"
          text="Student"
          img={GroupedPicture}
          className="hero-button--light hero-container__btn"
          variant="default"
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

        <div className="course-info"> 
          <CourseInfo
            img={CourseInfoImg}
            heading="Start Course"
            description="Duis aute irure dolor reprehenderit in
                        voluptate velit esse cillum dolore fugiat
                        nulla pariatur. Excepteur"
            className="course-info-container__courseInfo"
          />
               <CourseInfo
            img={CourseInfoImg}
            heading="Start Course"
            description="Duis aute irure dolor reprehenderit in
                        voluptate velit esse cillum dolore fugiat
                        nulla pariatur. Excepteur"
            className="course-info-container__img-container--primary"
          />

                <CourseInfo
            img={CourseInfoImg}
            heading="Start Course"
            description="Duis aute irure dolor reprehenderit in
                        voluptate velit esse cillum dolore fugiat
                        nulla pariatur. Excepteur"
            className="course-info-container__courseInfo"
          />
        </div>
        <div className="hero-container__about-us">
          <img
          src={YellowLayout}/>
          <div className="hero-container__about-us-container">
          <div className="hero-container__about-us__wrapper">
                <HeroButton
          number="Happy"
          text="Student"
          img={GroupedPicture}
          className="hero-button--light hero-container__btn about-us"
          variant="default"
        />
          <img
          src={KidPicture3}
          className="hero-container__about-us__wrapper__kid-picture3"/>
          <img
          src={KidPicture4}
          className="hero-container__about-us__wrapper__kid-picture4"/>
          <img
           src={RedCircle}
           className="hero-container__about-us__red-circle"
           />
            <img
           src={RedCircle}
           className="hero-container__about-us__red-circle2"
           />
          </div>
          <div className="hero-container__about-us-info">
            <h1 className="hero-container__about-us-heading">
              <img 
              src={AboutUsImg}
              />
              about us</h1>
              <h2 className="hero-container__about-us-heading2">It's our passion to work with
                  children at 
                  <span>kindergarten.</span>
              </h2>
              <p className="hero-container__about-us_details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud..</p>
                <div className="hero-container__about-us__school-info-box">
                  <SchoolInfoBox
                info='QUALITY EDUCATIORS'/>
                <SchoolInfoBox
                info='PLAY TO LEARN'/>
                     <SchoolInfoBox
                info='SAFETY AND SECURITY'/>
                <SchoolInfoBox
                info='HOMELIKE ENVIROMEND'
                />
                </div>
          </div>
          </div>
           <HeroButton
            text="Admission Open"
            className="hero-container__button2 shool-info-btn"
            variant="primary"
        
        />
        </div>
          <img
          src={Flower}
          className="hero-container__about-us__flower"/>
      </section>
    </>
  );
}
