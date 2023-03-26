import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
    footer: {
        background: 'white',
        paddingTop: '10px',
        marginTop: '20px',
        fontSize: '20px',
        heigth: '10%',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    icon:{
        //color:'DarkBlue',
        color: '#1d3557',
        fontSize:'35px'
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
    return (
        <footer style={styles.footer} className="fixed-bottom">

            <nav className="navbar navbar-expand-lg" style={styles.nav}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="btn btn-default" href="mailto:rima.bhumbla@gmail.com" aria-label="Email">
                            <FontAwesomeIcon icon="fa fa-envelope fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-default" href="https://github.com/rbhumbla1" target="blank" aria-label="Github">
                            <FontAwesomeIcon icon="fa-brands fa-github-square fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-default" href="https://www.linkedin.com/in/rimabhumbla/" target="blank" aria-label="LinkedIn">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
