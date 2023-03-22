import React from 'react';


const styles = {
  sectionStyles: {
    background: 'orange',
  },
  /*navigation links in the header*/
nav: {
    display:'flex',
    paddingTop: '15px',
    marginRight: '20px',
    justifyContent:'flex-center',
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

function Footer() {
  return (
    <footer style={styles.sectionStyles} className="fixed-bottom">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
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
      
    </footer>
  );
}

export default Footer;
