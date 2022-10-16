import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
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
          {renderPage()}
        </main>
      </div>
    </>
  );
}

export default App;
