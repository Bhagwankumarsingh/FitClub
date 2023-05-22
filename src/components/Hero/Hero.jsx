import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'


import {motion} from 'framer-motion'

const Hero = () => {

  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad  */}
        <div className="the-best-ad">
          <div></div>
          {/* <motion.div>
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={transition}

          </motion.div> */}
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero-heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
               </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={700} delay='4' preFix="+"/>

            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={10} delay='4' preFix="+"/>

            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* hero buttons  */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right side  */}
      <div className="right-h">
        <button className="btn">Join now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images  */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories  */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
