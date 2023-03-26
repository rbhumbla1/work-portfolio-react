import React, { useState } from 'react';
//import hcbgImage from "./email.jpg";
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const styles = {

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: '1 0 50%',
        //background: 'white'
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
        //color: 'DarkBlue',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

    h4: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: '1 0 20%',
        fontSize: '20px',
        paddingTop: '20px',
        //color: 'DarkBlue',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

    p: {

        textAlign: 'left',
        fontSize: '25px',
        //color: 'DarkBlue',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

    icon: {
        //color:'DarkBlue',
        color: '#1d3557',
        fontSize: '25px'
    },
    a: {
        //display: 'inline-block',
        textDecoration: 'none',
        color: '#1d3557',
        marginRight: '20px'
    }
};


export default function Project( proj ) {
    console.log("in project: ", proj)
    const [display, setDisplay] = useState("notdisplayed");
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };
    return (
        <div
            style={{
                position: 'relative',
                height: '300px',
                width: '39%',
                padding: '2rem',
                paddingRight: '0',
                marginTop: '1rem',
                marginLeft: '2rem',
                border: 'solid brown',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${proj.img})`,
                color: "#f5f5f5"
            }}
            onMouseEnter={e => showButton(e)}
            onMouseLeave={e => hideButton(e)}
        >
            <div style={styles.div}>
                <ul style={styles.p}>
                    <li style={{ display: 'inline-block', textAlign: 'left' }}>
                        <a className={display} style={styles.a} href={proj.projectURL} target='blank'><b>{proj.project}</b></a>
                    </li>

                    <li style={{ display: 'inline-block', textAlign: 'left' }}>
                        <a className={display} href={proj.github} target='blank'><FontAwesomeIcon icon="fa-brands fa-github-square fa-5x" style={styles.icon} /></a>
                    </li>
                </ul>

                <p style={styles.p} className={display}>{proj.tech}</p>
            </div>

        </div>
    );
}
