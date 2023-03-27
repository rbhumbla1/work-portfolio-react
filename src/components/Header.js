import React from 'react';
import Navigation from './Navigation';

import bgImg from "./images/sky.jpg";

const styles = {
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    padding: '10px',
    fontFamily: 'Permanent Marker',
    backgroundColor: 'DarkBlue',
    color: '#ffffff',
    backgroundImage:`url(${bgImg})`,

  },
  /* Title in header */
  h1: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1 0 20%',
    fontSize: '40px',
    color: '#ffffff',
    paddingTop: '20px',
    paddingLeft: '10px',
  },

};

// Header in main container which will display the developer's name & navigation bar.

function Header({ developer, currentPage, handlePageChange }) {
  
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>{developer}</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
