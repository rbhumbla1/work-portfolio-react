import React from 'react';

import Nav from 'react-bootstrap/Nav';

const styles = {

/*navigation links in the header*/
nav: {
    display:'flex',
    paddingTop: '10px',
    marginRight: '50px',
    justifyContent:'flex-end',
    flexDirection: 'row',
    float: 'right',
    fontFamily: 'Trebuchet MS',
    fontSize: '25px'
},


};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navigation({ currentPage, handlePageChange }) {
  return (

<Nav className="justify-content-end" variant="pills" defaultActiveKey="#About" as="ul" style={styles.nav}>
        <Nav.Item as="li">
          <Nav.Link href="#About" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#Work" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
        </Nav.Item>
      </Nav>
  );
}

export default Navigation;
