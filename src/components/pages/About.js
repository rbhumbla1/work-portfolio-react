import React from 'react';
import photo from '../images/LIProfile.JPG';

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

    }

};
// Page to show developer information
export default function About() {
    return (
        <div className="container" style={styles.div}>
            <div style={styles.box}>
                <h2 style={styles.h2}><b>About Me</b></h2>
                <br />
                <img src={photo} style={styles.img} alt="Rima Bhumbla" />
                <br />
                <p style={styles.p}>
                    I am a <b>full-stack web developer</b> leveraging background in Software Development and Quality Assurance to provide unique perspectives on how end-users interact with websites and software platforms.  I recenlty completed an intensive certificate in Full Stack Web Development from the University of Berkeley Extension Coding Bootcamp.  I gained valuable experience in the foundations of web development while honing my skills in JavaScript, CSS, React.js, and responsive web design.

                    <br /><br />An  innovative problem-solver who is passionate about developing applications with a focus on mobile-first design and development, my degrees in Mathematics and Computer Science have prepared me to approach problems with creativity and innovation.  My work experience in industry has enabled me to build and strengthen my ability to build and lead projects from ideation to execution via teamwork and collaboration.

                    <br /><br />With each project, I aim to understand how to best engage users for an impactful user experience. I applied aspects of Behavior Driven Development, Agile Development and Quality Assurance in a recent project where I worked in a team of 4 to develop an interactive front-end application, outdoorsyISH, that helps indoorsy people to explore our National Parks based on their criteria of comfort.

                    <br /><br />When I am not designing or developing, I enjoy hiking with my dog, traveling with my husband and crocheting little gifts for my friends!  I am a big believer in lifelong learning and value of education.  I work part-time as a substitute teacher in my local school district.  I plan to continue in education field as a teacher and tutor.

                    <br /><br />I am mainly interested in freelance or contracting work where I can leverage my skills as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project <b><a href="https://www.linkedin.com/in/rimabhumbla/" target="blank">here</a></b>.
                </p>
            </div>
        
        </div>
    );
}
