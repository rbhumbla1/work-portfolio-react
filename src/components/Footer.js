import React from 'react';


const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      
    </section>
  );
}

export default Footer;
