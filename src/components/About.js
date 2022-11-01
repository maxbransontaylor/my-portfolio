import React, { useEffect, useState } from "react";
import medium from "../mediumcasual.jpg";
import business from "../business.png";
import casual from "../casual.jpg";
function About({ preferences }) {
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
        {preferences.picture === "medium" && (
          <img className="prof-img" src={medium}></img>
        )}
        {preferences.picture === "business" && (
          <img className="prof-img" src={business}></img>
        )}
        {preferences.picture === "casual" && (
          <img className="prof-img" src={casual}></img>
        )}
        <p id="about-text">
          I am a full stack web developer that finds fulfillment in creating
          exciting, interactive front-ends as well as efficient, intuitive
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
