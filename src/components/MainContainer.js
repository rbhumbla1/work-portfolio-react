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

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
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
        <div style={styles.div}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
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

export default MainContainer;
