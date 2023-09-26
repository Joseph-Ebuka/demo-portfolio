import React from "react";
import reactlogo from "../assets/img/react.jpg";
import css from "../assets/img/css..jpg";
import html from "../assets/img/html.jpg";
import { Slide, Bounce } from "react-awesome-reveal";
function About() {
  return (
    <div className="aboutSection">
      <div className="aboutHeader">
        <span>My Bio</span>
        <span>
          About <span style={{ color: "#06fdfd" }}>Me</span>.
        </span>
      </div>
      <div className="aboutFlex">
        <Slide>
          <div className="box1">
            <img className="react" src={reactlogo} alt="React Logo" />
            <img className="css" src={css} alt="CSS Logo" />
            <img className="html" src={html} alt="HTML Logo" />
            <div className="mainAboutPic"></div>
          </div>
        </Slide>
       

        <div className="box2">
        <Slide direction="right" >

          <p>
            {" "}
            Ebuka, a Lagos-based coding enthusiast, is dedicated to mastering
            React on his path to becoming a frontend developer. With a strong
            passion for coding and a love for football, he aims to land a
            rewarding position in the tech industry.
          </p>
          <br />
          <p>
            {" "}
            Meet Ebuka, a frontend development enthusiast residing in Lagos,
            Nigeria. He's diving deep into React, driven by his ambition to
            secure a role in the tech world. When not coding, you'll find him
            cheering for his favorite football teams
          </p>
          <br />
          <p>
            {" "}
            Ebuka, hailing from vibrant Lagos, is on a coding journey with a
            focus on React. His determination to become a frontend developer
            fuels his learning. Alongside his tech passion, he's an avid
            football fan, aspiring to merge his interests in the tech industry.
          </p>
        </Slide>
        </div>
   
      </div>
      <div className="skillFlex">
        <div className="box1">
          <div className="aboutHeader start">
            <span>skills</span>
            <span>
              technical{" "}
              <span
                style={{
                  color: "#06fdfd",
                  fontSize: "20px",
                  textTransform: "capitalize",
                }}
              >
                skills
              </span>
              .
            </span>
          </div>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatibus quae minus iure esse alias asperiores impedit excepturi
            ut quis itaque laborum sapiente nulla est, incidunt iste atque
            deserunt tempora, a reiciendis dolorum. Commodi ratione, modi a
            magnam ut non!
          </p>
        </div>
        <div className="box2">
          <Bounce>

          <div className="lang one">html5</div>
          <div className="lang two">javascript</div>
          <div className="lang three">tailwind</div>
          <div className="lang one">scss</div>
          <div className="lang two">typescript</div>
          <div className="lang three">next js</div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default About;
