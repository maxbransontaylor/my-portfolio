import React from "react";
import { CirclePicker } from "react-color";
function Color({ preferences, setPreferences }) {
  function handleChange(color) {
    setPreferences({ ...preferences, color: color.rgb });
  }
  return (
    <>
      <h2>What's your favorite color?</h2>
      <CirclePicker onChange={handleChange} />
    </>
  );
}
export default Color;
