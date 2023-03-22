import React from 'react';

const styles = {
  header: {
    display:'flex',
    width:'100%',
    flexDirection:'row',
    padding: '20px',
    fontFamily: 'Trebuchet MS',
    backgroundColor: 'rgb(163, 105, 17)',
    color: '#ffffff'
},
/* Title in header */
h1: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1 0 20%',
    fontSize: '48px'
},

/*navigation links in the header*/
nav: {
    display:'flex',
    paddingTop: '15px',
    marginRight: '20px',
    justifyContent:'flex-end',
    flexDirection: 'row',
    float: 'right',
    fontFamily: 'Gill Sans',
    fontSize: '20px'
},

/*class selector*/

hlink: {
    color: '#ffffff',
    textDecoration: 'underline'
}
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <header style={styles.header}>
        <h1 style={styles.h1}><a href="https://github.com/rbhumbla1" style={styles.hlink}>RBhumbla1</a></h1>
    <nav className="navbar navbar-expand-lg" style={styles.nav}>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#AboutMe" className="nav-link" style={styles.hlink}>About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#AboutWork" className="nav-link" style={styles.hlink}>Work</a>
                </li>
                <li className="nav-item">
                    <a href="#AboutContact" className="nav-link" style={styles.hlink}>Contact Me</a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://docs.google.com/document/d/1SFNAzc7UqTH0-faUBU2EGZJIdyNyubTatG_xwVNfspo/edit" className="nav-link" style={styles.hlink}>Resume</a>
                </li>
            </ul>
    </nav>
    </header>
  );
}

export default Navbar;
