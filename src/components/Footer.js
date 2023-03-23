import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  sectionStyles: {
    background: 'grey',
    paddingTop: '0px',
    marginTop: '0px',
  },
  /*navigation links in the header*/
nav: {
    display:'flex',
    paddingTop: '0px',
    marginTop: '0px',
    justifyContent:'center',
    alignItems: 'center',
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
        <div>
        <FontAwesomeIcon icon="fa-solid fa-check-square" />
    Your <FontAwesomeIcon icon="fa-brands fa-twitter" /> is hot!

    Compliments of the <FontAwesomeIcon icon="fa-sharp fa-solid fa-hat-chef" />!
    </div>
    </footer>
  );
}

export default Footer;
