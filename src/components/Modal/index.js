import React, { useEffect, useState } from "react";
import Font from './Font'
import './index.css'
import Color from './Color'
function Modal({ setShowModal, preferences, setPreferences }) {
    const [pageLoad, setPageLoad] = useState(false);
    useEffect(() => {
        setPageLoad(true);
        return function cleanup() {
            setPageLoad(false);
        };
    }, []);
    useEffect(() => {
        localStorage.setItem('preferences', JSON.stringify(preferences))
    }, [preferences])
    const [page, setPage] = useState(0)


    return (
        <div className={`modalBackdrop ${pageLoad ? "yopacity" : "nopacity"
            }`}>
            <div className="modalContainer">
                <h3 className="modalTitle">Preferences</h3>
                <button className="close" onClick={() => { ; setShowModal(false) }}><span aria-hidden="true">&times;</span></button>
                <section id='contentcontainer'>
                    {page === 0 && <p>Please set preffies</p>}
                    {page === 1 && <Font preferences={preferences} setPreferences={setPreferences} />}
                    {page === 2 && <Color preferences={preferences} setPreferences={setPreferences} />}
                </section>
                <div id='buttoncontainer'>
                    {page > 0 && <button onClick={() => setPage(page - 1)} className="btn btn-primary" id="backbtn" type="button">
                        Back
                    </button>}
                    <button onClick={() => { ; setPage(page + 1) }} className="btn btn-primary" id="nextbtn" type="button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal