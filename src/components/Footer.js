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
        color: '#1d3557',
        fontSize:'35px'
    }
};

// Footer for the application.  It contains icons for third party links - Email, GitHub and LinkedIn

function Footer({devEmail, devGitHub,devLinkedIn}) {

    let email = "mailto: " + {devEmail};
    
    return (
        <footer style={styles.footer} className="fixed-bottom">
            <nav className="navbar navbar-expand-lg" style={styles.nav}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="btn btn-default" href={email} aria-label="Email">
                            <FontAwesomeIcon icon="fa fa-envelope fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-default" href={devGitHub} target="blank" aria-label="Github">
                            <FontAwesomeIcon icon="fa-brands fa-github-square fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-default" href={devLinkedIn} target="blank" aria-label="LinkedIn">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin fa-5x" style={styles.icon}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
