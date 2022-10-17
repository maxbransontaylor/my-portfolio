import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    setPageLoad(true);
    return function cleanup() {
      setPageLoad(false);
    };
  }, []);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });
  function changeHandler(e) {
    //    prioritize showing 'email is required' over 'invalid email'
    if (!e.target.value.length) {
      setErrorMessage({
        ...errorMessage,
        [e.target.name + "Error"]: `${e.target.name} is required`,
      });
    } else if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage({ ...errorMessage, emailError: `invalid email` });
      }
    } else {
      setErrorMessage({
        ...errorMessage,
        [e.target.name + ["Error"]]: "",
      });
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log(errorMessage);
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(formState);
  }
  const { nameError, emailError, messageError } = errorMessage;
  const { name, email, message } = formState;
  return (
    <form
      onSubmit={submitHandler}
      className={`contact ${pageLoad ? "yopacity" : "nopacity"}`}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          onBlur={changeHandler}
          defaultValue={name}
        />
        {nameError ? (
          <small className="form-text text-muted">{nameError}</small>
        ) : (
          <small className="form-text nopacity">placeholder</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          type="email"
          name="email"
          onBlur={changeHandler}
          defaultValue={email}
        />
        {emailError ? (
          <small className="form-text text-muted">{emailError}</small>
        ) : (
          <small className="form-text nopacity">placeholder</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          rows="5"
          name="message"
          onBlur={changeHandler}
          defaultValue={message}
          className="form-control"
        />
        {messageError ? (
          <small className="form-text text-muted">{messageError}</small>
        ) : (
          <small className="form-text nopacity">placeholder</small>
        )}
      </div>
      {errorMessage && (
        <div>
          <p className="error-text"></p>
        </div>
      )}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default Contact;
