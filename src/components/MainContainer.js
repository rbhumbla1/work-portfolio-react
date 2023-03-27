import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


const styles = {
    div: {
        height: '100%',
        width: '100%',
        background: 'white'
    },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function MainContainer() {

    const [currentPage, setCurrentPage] = useState('About');
    // DEveloper information to be passed to header and footer
    const [developer] = useState('Rima Bhumbla');
    const [devEmail] = useState('rima.bhumbla@gmail.com');
    const [devGitHub] = useState('https://github.com/rbhumbla1');
    const [devLinkedIn] = useState('https://www.linkedin.com/in/rimabhumbla/');
    const [devResume] = useState('https://drive.google.com/file/d/1wZ1VstGJIhCX3tcviALWKg7rwhPpnCyP/view?usp=sharing');


    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume devResume={devResume}/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.div}>
            {/* Setup header for the page */}
            <Header developer={developer} currentPage={currentPage} handlePageChange={handlePageChange} />
           
            {/* We are passing the currentPage from state and the function to update it */}
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            {/* Setup Footer for the page */}
            <Footer devEmail={devEmail} devGitHub={devGitHub} devLinkedIn={devLinkedIn}/>
        </div>
    );
}

export default MainContainer;
