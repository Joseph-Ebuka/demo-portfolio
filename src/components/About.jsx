import React from "react";
import reactlogo from "../assets/img/react.jpg"; 
import css from "../assets/img/css..jpg";
import html from "../assets/img/html.jpg";

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
        <div className="box1">
          <img className="react" src={reactlogo} alt="React Logo" />
          <img className="css" src={css} alt="CSS Logo" />
          <img className="html" src={html} alt="HTML Logo" />
          <div className="mainAboutPic"></div>
        </div>
        <div className="box2">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            omnis exercitationem incidunt quibusdam expedita cupiditate dolorum,
            necessitatibus tenetur eum minus, atque error ea doloremque modi
            distinctio, facere dolore iure nostrum consequatur iste tempore
            maiores sed ad? Dicta asperiores dolore tempore!
          </p>
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            omnis exercitationem incidunt quibusdam expedita cupiditate dolorum,
            necessitatibus tenetur eum minus, atque error ea doloremque modi
            distinctio, facere dolore iure nostrum consequatur iste tempore
            maiores sed ad? Dicta asperiores dolore tempore!
          </p>
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            omnis exercitationem incidunt quibusdam expedita cupiditate dolorum,
            necessitatibus tenetur eum minus, atque error ea doloremque modi
            distinctio, facere dolore iure nostrum consequatur iste tempore
            maiores sed ad? Dicta asperiores dolore tempore!
          </p>
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
          <div className="lang one">html5</div>
          <div className="lang two">javascript</div>
          <div className="lang three">tailwind</div>
          <div className="lang one">scss</div>
          <div className="lang two">typescript</div>
          <div className="lang three">next js</div>
        </div>
      </div>
    </div>
  );
}

export default About;