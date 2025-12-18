import React from 'react';
import Navbar from '../../Components/nav-bar/Navbar';
import HeroPage from '../../Components/hero-page/HeroPage';
import WhyChooseUs from '../../Components/why-choose-us/WhyChooseUs';


export default function HomePage() {
  return (
    <section>
       <Navbar/>
       <HeroPage/>  
       <WhyChooseUs/>
    </section>
  )
}
