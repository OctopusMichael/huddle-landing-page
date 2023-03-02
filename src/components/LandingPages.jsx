import React from "react";
import logo from "../images/logo.svg";
import hero from "../images/illustration-mockups.svg"
import {IoLogoFacebook} from 'react-icons/io5'
import {IoLogoTwitter} from 'react-icons/io5'
import {IoLogoInstagram} from 'react-icons/io5'   


const LandingPages = () => {
  return (
    <>
      <div className="container-fluid  section-container-main">
        <div className="row">
          <div className=" section-left col-12 col-lg-6 ">
            <img className="logo" src={logo} alt="logo" />
            <img className="hero" src={hero} alt="heroimg"/>
          </div>
          <div className="section-right col-12 col-lg-6">
            <h1> Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="btn "> Register </button>
            <div>
              <footer > 
                <div className="section-icons">
                  <a href='#'> <IoLogoFacebook/> </a>
                  <a href='#'> <IoLogoTwitter/> </a>
                  <a href='#'> <IoLogoInstagram/> </a>
                </div>
                <div>
                <p className="attribution">
                  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                  Coded by <a href="#">Michael Diaz</a>.
                </p>
                </div>
              </footer>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPages;
