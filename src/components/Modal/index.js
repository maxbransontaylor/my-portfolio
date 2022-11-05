import React, { useEffect, useState } from "react";
import Font from "./Font";
import "./index.css";
import Color from "./Color";
import Picture from "./Picture";
function Modal({ setShowModal, preferences, setPreferences }) {
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    setPageLoad(true);
    return function cleanup() {
      setPageLoad(false);
    };
  }, []);
  function backdropClose(event) {
    if (!event.target.matches(".modalBackdrop")) {
      return;
    } else {
      setShowModal(false);
    }
  }
  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));
  }, [preferences]);
  const [page, setPage] = useState(0);

  return (
    <div
      className={`modalBackdrop ${pageLoad ? "yopacity" : "nopacity"}`}
      onClick={backdropClose}
    >
      <div className="modalContainer d-flex align-items-center">
        <button
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <section id="contentcontainer">
          {page === 0 && (
            <>
              <h3>Welcome to Max's Portfolio!</h3>
              <p>
                It's hard designing a website that appeals to everybody. Please
                help us taylor your experience by selecting a few preferences.
              </p>
            </>
          )}
          {page === 1 && (
            <Font preferences={preferences} setPreferences={setPreferences} />
          )}
          {page === 2 && (
            <Color preferences={preferences} setPreferences={setPreferences} />
          )}
          {page === 3 && (
            <Picture
              preferences={preferences}
              setPreferences={setPreferences}
            />
          )}
        </section>
        <p id="pagecounter">{page}/3</p>
        <div id="buttoncontainer">
          {page > 0 && (
            <>
              <button
                onClick={() => setPage(page - 1)}
                className="btn btn-primary"
                id="backbtn"
                type="button"
              >
                Back
              </button>
            </>
          )}
          <button
            onClick={() => {
              if (page === 3) {
                setShowModal(false);
              } else {
                setPage(page + 1);
              }
            }}
            className="btn btn-primary"
            id="nextbtn"
            type="button"
          >
            {page === 3 ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
