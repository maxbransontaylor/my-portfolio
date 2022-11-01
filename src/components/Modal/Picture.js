import React from "react";
import medium from "../../mediumcasual.jpg";
import business from "../../business.png";
import casual from "../../casual.jpg";
function Picture({ preferences, setPreferences }) {
  function handleChange(event) {
    const picture = document.querySelector("input[name=picture]:checked").value;

    setPreferences({ ...preferences, picture: picture });
  }
  return (
    <>
      <h3>Who looks like the best fit for your company/project?</h3>
      <form className="picture-selector" onChange={handleChange}>
        <input
          id="medium"
          type="radio"
          name="picture"
          value="medium"
          defaultChecked={preferences.picture === "medium"}
        />
        <label
          htmlFor="medium"
          className="pictures"
          style={{ backgroundImage: `url(${medium})` }}
        ></label>
        <input
          id="business"
          type="radio"
          name="picture"
          value="business"
          defaultChecked={preferences.picture === "business"}
        />
        <label
          htmlFor="business"
          className="pictures"
          style={{ backgroundImage: `url(${business})` }}
        ></label>
        <input
          id="casual"
          type="radio"
          name="picture"
          value="casual"
          defaultChecked={preferences.picture === "casual"}
        />
        <label
          htmlFor="casual"
          className="pictures"
          style={{ backgroundImage: `url(${casual})` }}
        ></label>
      </form>
    </>
  );
}
export default Picture;
