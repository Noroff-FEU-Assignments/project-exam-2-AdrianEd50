import React from "react";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import { Link } from "react-router-dom";
import arrorDown from "../../images/down-arrow.png";

function Home() {
  return (
    <>
      <div className="white-background-container">
        <div className="home_container">
          <div>
            <Heading content="Social Scoop is a site where people can share their thoughts and inspire eachother" />

            <Paragraph content="This is a social media plattform that can be used by those who want" />
          </div>

          <div className="homePage_register_form">
            <Heading content="Become a member" />
            <button className="home_register_btn">
              <Link to="/register">Click here to register</Link>
            </button>
            <p className="down-arrow">
              Already a meber? Click the button below to login{" "}
              <img src={arrorDown} />
            </p>
            <button className="home_register_btn">
              <Link to="/login">Click here to login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
