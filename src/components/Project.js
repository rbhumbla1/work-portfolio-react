import React, { useState } from 'react';
//import hcbgImage from "./email.jpg";
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// const styles = {

//     div: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         flex: '1 0 50%',
//         background: 'white'
//     },

//     box: {
//         width: '100%',
//         height: '100%',
//     },

//     h2: {
//         display: 'flex',
//         justifyContent: 'flex-start',
//         flex: '1 0 20%',
//         fontSize: '30px',
//         paddingTop: '20px',
//         color: 'DarkBlue',
//         fontFamily: 'Trebuchet MS',
//     },

//     h4: {
//         display: 'flex',
//         justifyContent: 'flex-start',
//         flex: '1 0 20%',
//         fontSize: '20px',
//         paddingTop: '20px',
//         color: 'DarkBlue',
//         fontFamily: 'Trebuchet MS',
//     },

//     p: {

//         textAlign: 'left',
//         color: 'DarkBlue',
//         fontFamily: 'Trebuchet MS',
//     },

//     notdisplayed: {
//         display: 'none',
//     },

//     displayed: {
//         display: 'flex',
//         height: '20px',
//         margin: 'auto'
//     },

// };


export default function Project({ img }) {
    console.log("in project: ", img)
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
                height: '200px',
                width: '39%',
                padding: '2rem',
                paddingRight: '0',
                marginTop: '1rem',
                marginLeft: '2rem',
                border: 'solid brown',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${img})`,
                color: "#f5f5f5"
            }}
            onMouseEnter={e => showButton(e)}
            onMouseLeave={e => hideButton(e)}
        >
            
            <button className={display}>I might be an invisible button</button>
            <a className={display} href="https://rbhumbla1.github.io/README-Generator/" target='blank'>README GNERATOR</a>
            <a className={display} href="https://github.com/rbhumbla1/Password-Generator" target='blank'><FontAwesomeIcon icon="fa-brands fa-github-square fa-5x" /></a>
    
            <p style={{ color: "Blue" }}>Javascript</p>

        </div>
    );
}
