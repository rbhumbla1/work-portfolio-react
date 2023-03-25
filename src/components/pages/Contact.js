import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const styles = {

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '1 0 50%',
    background: 'white'
  },

  box: {
    width: '100%',
    height: '100%',
  },

  h2: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1 0 20%',
    fontSize: '30px',
    paddingTop: '20px',
    color: 'DarkBlue',
    fontFamily: 'Trebuchet MS',
  },
  p: {

    textAlign: 'left',
    color: 'DarkBlue',
    fontFamily: 'Trebuchet MS',
  },
  img: {
    bottom: '16px',
    right: '16px',
    height: '85%',
    width: '10%',
    display: 'flex',
    justifyContent: 'flex-start'

  },
  form: {
 
    textAlign: 'left',
    margin: '20px',
  },

  input: {
    display: 'block',
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
  },
  card: { 
    width: '40rem',
    borderWidth:'2px',
    borderColor:'DarkBlue'
   },
   cardButton:{
    backgroundColor:'DarkBlue',
    color:'white'
   }

};

export default function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorEmailMessage('Email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }

    if (!message) {
      setErrorMessage('Message is required.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;

    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorEmailMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container" style={styles.div}>
      <div style={styles.box}>
        <h2 style={styles.h2}>Contact Me</h2>
    
        <Card style={styles.card}>
        <Card.Body>
        <form className="form" style={styles.form}>
        <label htmlFor="name" style={styles.p}>Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            style={styles.input}
          />
          <label htmlFor="email" style={styles.p}>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            style={styles.input}
          />
          {errorEmailMessage && (
            <div>
              <p className="error-text" style={styles.p}>{errorEmailMessage}</p>
            </div>
          )}
          <label htmlFor="message" style={styles.p}>Message:</label>
          <textarea
            rows="5"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            style={styles.input}
          />
          {errorMessage && (
            <div>
              <p className="error-text" style={styles.p}>{errorMessage}</p>
            </div>
          )}
          <button type="button" style={styles.cardButton} onClick={handleFormSubmit}>Submit</button>
        </form>
       </Card.Body>
        </Card>
      </div>
    </div>
  );
}
