import React, { useEffect, useState } from "react";
import photo from "../mediumcasual.jpg";

function About() {
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    setPageLoad(true);
    return function cleanup() {
      setPageLoad(false);
    };
  }, []);
  return (
    <section
      className={`about-page d-flex align-items-center ${
        pageLoad ? "yopacity" : "nopacity"
      }`}
    >
      <div id="about-container">
        <img className="prof-img" src={photo}></img>
        <p id="about-text">
          I am a full stack web developer that finds fulfillment in creating
          exciting, interactive front-ends as well as effecient, intuitive
          backends. What I love even more is the creative problem-solving and
          bug-fixing along the way. User experience and accessibility are
          essential. I try to consider a wide range of users and develop
          intuitive features before they might be asked for.
        </p>
      </div>
    </section>
  );
}

export default About;
