import React from 'react';
//using react-bootstrap Nav for he navigation bar
import Nav from 'react-bootstrap/Nav';

// local style
const styles = {
  /*navigation links in the header*/
  nav: {
    display: 'flex',
    paddingTop: '10px',
    marginRight: '50px',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    float: 'right',
    fontFamily: 'Permanent Marker',
    fontSize: '25px'
  },
};

// Navigation handles the menu in the navigation bar in side the header
function Navigation({ currentPage, handlePageChange }) {
  return (

    <Nav className="justify-content-end" variant="pills" defaultActiveKey="#About" as="ul" style={styles.nav}>
      <Nav.Item as="li">
        <Nav.Link href="#About" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
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
