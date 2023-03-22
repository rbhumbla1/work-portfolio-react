import React, { useState } from 'react';
import logo from '../logo.svg';
import Navbar from "./Navbar";


const styles = {
  contentStyles: {
    background: 'white',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Content() {

    const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
 /*} const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };*/

  const handlePageChange = (page) => setCurrentPage(page);
  return ( 
    <div>
      <Navbar />
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {/*renderPage*/}
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          🛠 Work Portfolio with React In Progress 🛠
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default Content;
