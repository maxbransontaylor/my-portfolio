import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import { CSSTransition } from 'react-transition-group'

function App() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const [currentPage, pageSelect] = useState('About Me')
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  }
  return (
    <>
      <div className="container mt-2" id="page-container">

        <Nav currentPage={currentPage} pageSelect={pageSelect}></Nav>
        <main>
          <CSSTransition nodeRef={nodeRef} in={true} timeout={200} classNames="my-node">
            <div ref={nodeRef}>
              {"I'll receive my-node-* classes"}
              {renderPage()}
            </div>
          </CSSTransition>
        </main>
        <footer><h1>footer</h1></footer>
      </div>
    </>
  );
}

export default App;
