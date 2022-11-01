import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [isError, setIsError] = useState(true);
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
  useEffect(() => {
    const { nameError, emailError, messageError } = errorMessage;
    const { name, email, message } = formState;
    if (nameError || emailError || messageError) {
      setIsError(true);
    } else if (!email || !name || !message) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [errorMessage, formState]);

  function changeHandler(e) {
    //    prioritize showing 'email is required' over 'invalid email'
    if (!e.target.value.length) {
      setErrorMessage({
        ...errorMessage,
        [e.target.name + "Error"]: `${e.target.name} is required`,
      });
      return;
    } else if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage({ ...errorMessage, emailError: `invalid email` });
        return;
      }
    }
    setErrorMessage({
      ...errorMessage,
      [e.target.name + ["Error"]]: "",
    });

    if (!errorMessage[e.target.name]) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  const [responseMsg, setResponseMsg] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    if (!isError) {
      fetch("https://wicked-treat-98250.herokuapp.com/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }).then((response) => {
        if (response.ok) {
          setFormState({
            name: "",
            email: "",
            message: "",
          });
          document.getElementById("contactform").reset();
          setResponseMsg("Message received, thanks for reaching out!");
          setTimeout(() => {
            setResponseMsg("");
          }, 5000);
        } else {
          setResponseMsg("Something went wrong...");
          setTimeout(() => {
            setResponseMsg("");
          }, 5000);
        }
      });
    }
  }
  const { nameError, emailError, messageError } = errorMessage;
  const { name, email, message } = formState;
  return (
    <form
      onSubmit={submitHandler}
      className={`contact ${pageLoad ? "yopacity" : "nopacity"}`}
      id="contactform"
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
      <button type="submit" className={`btn ${isError && "disabled"}`}>
        Submit
      </button>
      <div>{responseMsg}</div>
    </form>
  );
}

export default Contact;
