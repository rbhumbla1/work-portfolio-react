import React, { useState } from 'react';
//import logo from '../logo.svg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


// const styles = {
//   contentStyles: {
//     background: 'white',
//   },
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

function Content() {

    const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return ( 
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      <p>
          🛠 Work Portfolio with React In Progress 🛠
        </p>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Content;
