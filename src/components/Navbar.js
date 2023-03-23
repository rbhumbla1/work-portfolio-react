import React from 'react';
import './Navbar.css';

const styles = {
  header: {
    display:'flex',
    width:'100%',
    flexDirection:'row',
    // padding: '10px',
    fontFamily: 'Trebuchet MS',
    backgroundColor: 'DarkBlue',
    color: '#ffffff'
},
/* Title in header */
h1: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1 0 20%',
    fontSize: '40px',
    color: '#ffffff',
    paddingTop: '30px',
    paddingLeft: '10px',
},

/*navigation links in the header*/
nav: {
    display:'flex',
    paddingTop: '10px',
    marginRight: '50px',
    justifyContent:'flex-end',
    flexDirection: 'row',
    float: 'right',
    fontFamily: 'Trebuchet MS',
    fontSize: '30px'
},

/*class selector*/

hlink: {
    color: '#ffffff',
    margin:'20px',
}
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
        <h1 style={styles.h1}>Rima Bhumbla</h1>
    <nav className="navbar navbar-expand-lg" style={styles.nav}>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#About" 
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                    style={styles.hlink} 
                    onClick={() => handlePageChange('About')}>About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#Work" 
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'} 
                    style={styles.hlink}
                    onClick={() => handlePageChange('Work')}>Work</a>
                </li>
                <li className="nav-item">
                    <a href="#Contact" 
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}  
                    style={styles.hlink}
                    onClick={() => handlePageChange('Contact')}>Contact</a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Resume" 
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                        style={styles.hlink}
                        onClick={() => handlePageChange('Resume')}>Resume</a>
                </li>
            </ul>
    </nav>
    </header>
  );
}

export default Navbar;
