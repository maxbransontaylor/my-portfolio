import React, { useEffect } from "react";
import photo from "../mediumcasual.jpg";
import { showPage, hidePage } from "../utils/helpers";
function About() {
  useEffect(() => {
    showPage(4);
    return function cleanup() {
      hidePage(4);
    };
  }, []);
  return (
    <section className="about-page">
      <img className="prof-img " src={photo}></img>
      <p id="about-text">
        I am a full stack web developer that finds fulfillment in creating
        exciting, interactive front-ends as well as clean, efficient backends.
        What I love even more is the creative problem-solving and bug-fixing
        along the way. User experience and accessibility are essential. I try to
        consider a wide range of users and develop intuitive features before
        they might be asked for.
      </p>
    </section>
  );
}

export default About;
