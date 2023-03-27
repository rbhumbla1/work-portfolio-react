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
    fontSize: '35px',
    paddingTop: '20px',
    color: '#1d3557',
    fontFamily: 'Permanent Marker',
  },
  p: {

    textAlign: 'left',
    fontSize: '20px',
    color: '#1d3557',
    fontFamily: 'Permanent Marker',
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
    borderWidth: '2px',
    //borderColor:'DarkBlue'
    borderColor: '#1d3557',
  },
  cardButton: {
    //backgroundColor:'DarkBlue',
    backgroundColor: '#1d3557',
    color: 'white'
  }

};

//Form to submit contact information.  This page has error handling done in handleFocusChange and handleFormSubmit methods to catch empty input for required fields and invalid email 
export default function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorEmptyNameMessage, setErrorEmptyNameMessage] = useState('');
  const [errorInvalidEmailMessage, setErrorInvalidEmailMessage] = useState('');
  const [errorEmptyEmailMessage, setErrorEmptyEmailMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //Method to store the input value
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

  //ethod to handle focus change - if the required field is empty, we will see a error message
  const handleFocusChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      if (!inputValue) {
        setErrorEmptyEmailMessage('Email is required.');
        return;
      }
      if (!validateEmail(inputValue)) {
        setErrorInvalidEmailMessage('Your email is invalid.');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }

    } else if (inputType === 'name') {
      if (!inputValue) {
        setErrorEmptyNameMessage('Name is required.');
        return;
      }

    } else {
      if (!inputValue) {
        setErrorMessage('Message is required.');
        return;
      }

    }
  
    setErrorEmptyNameMessage('');
    setErrorEmptyEmailMessage('');
    setErrorInvalidEmailMessage('');
    setErrorMessage('');
  };

  // handler methos for form submit
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorInvalidEmailMessage('Your email is invalid.');
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
    setErrorEmptyNameMessage('');
    setErrorEmptyEmailMessage('');
    setErrorInvalidEmailMessage('');
    setErrorMessage('');
  };



  return (
    <div className="container" style={styles.div}>
      <div style={styles.box}>
        <h2 style={styles.h2}><b>Contact Me</b></h2>

        <Card style={styles.card}>
          <Card.Body>
            <form className="form" style={styles.form}>
              <label htmlFor="name" style={styles.p}>Name:</label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleFocusChange}
                type="text"
                placeholder="Name"
                style={styles.input}
              />

              {errorEmptyNameMessage && (
                <div>
                  <p className="error-text" style={styles.p}>{errorEmptyNameMessage}</p>
                </div>
              )}
              <label htmlFor="email" style={styles.p}>Email:</label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleFocusChange}
                type="email"
                placeholder="Email"
                style={styles.input}
              />
              {errorEmptyEmailMessage && (
                <div>
                  <p className="error-text" style={styles.p}>{errorEmptyEmailMessage}</p>
                </div>
              )}
              {errorInvalidEmailMessage && (
                <div>
                  <p className="error-text" style={styles.p}>{errorInvalidEmailMessage}</p>
                </div>
              )}
              <label htmlFor="message" style={styles.p}>Message:</label>
              <textarea
                rows="5"
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleFocusChange}
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
