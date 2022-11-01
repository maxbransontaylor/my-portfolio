import React from "react";

function Font({ preferences, setPreferences }) {
  function handleChange() {
    const font = document.querySelector("input[name=fontselect]:checked").value;
    setPreferences({ ...preferences, font: font });
  }

  return (
    <>
      <h2>Which font looks the most professional?</h2>
      <form onChange={handleChange}>
        <div className="form-check" id="indie">
          <input
            className="form-check-input"
            type="radio"
            name="fontselect"
            id="indieinput"
            value="Indie Flower"
            defaultChecked={preferences.font === "Indie Flower"}
          />
          <label className="form-check-label" htmlFor="indieinput">
            This one!
          </label>
        </div>
        <div className="form-check" id="figtree">
          <input
            className="form-check-input"
            type="radio"
            name="fontselect"
            id="figtreeinput"
            value="Figtree"
            defaultChecked={preferences.font === "Figtree"}
          />
          <label className="form-check-label" htmlFor="figtreeinput">
            This one!
          </label>
        </div>
        <div className="form-check" id="orb">
          <input
            className="form-check-input"
            type="radio"
            name="fontselect"
            id="orbinput"
            value="Orbitron"
            defaultChecked={preferences.font === "Orbitron"}
          />
          <label className="form-check-label" htmlFor="orbinput">
            This one!
          </label>
        </div>
      </form>
    </>
  );
}
export default Font;
