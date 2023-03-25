import React from 'react';
import Navigation from './Navigation';

const styles = {
  header: {
    display:'flex',
    width:'100%',
    flexDirection:'row',
 padding: '10px',
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
    //color:'#0d6efd',
    paddingTop: '20px',
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
    fontSize: '25px'
},

/*class selector*/

hlink: {
    color: '#ffffff',
    margin:'20px',
}
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
        <h1 style={styles.h1}>Rima Bhumbla</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;
