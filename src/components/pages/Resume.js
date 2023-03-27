import React from 'react';

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
        //color: 'DarkBlue',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

    h4: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: '1 0 20%',
        fontSize: '25px',
        paddingTop: '20px',
        //color: 'DarkBlue',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

    p: {
        textAlign: 'left',
        fontSize: '20px',
        color: '#1d3557',
        fontFamily: 'Permanent Marker',
    },

};

export default function Resume() {
    return (
        <div className="container" style={styles.div}>
            <div style={styles.box}>
                <h2 style={styles.h2}><b>Resume</b></h2>
                <br />
                <p style={styles.p}>
                    {/* <b>Download my <Link to="https://drive.google.com/file/d/1wZ1VstGJIhCX3tcviALWKg7rwhPpnCyP/view?usp=sharing" target="blank" download>Resume</Link></b> */}
                    <b>Download my <a href="https://drive.google.com/file/d/1wZ1VstGJIhCX3tcviALWKg7rwhPpnCyP/view?usp=sharing" target="blank" download>Resume</a></b>
                </p>
                
                        <h4 style={styles.h4}>Front-End Proficiencies</h4>
                        <ul style={styles.p}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Botstrap</li>
                        </ul>
             
                        <h4 style={styles.h4}>Back-End Proficiencies</h4>
                        <ul style={styles.p}>
                            <li>API</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>

            </div>
        </div>
    );
}
