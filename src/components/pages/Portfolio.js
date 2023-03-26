import React from 'react';
import Project from "../Project";

import hcbgImage from "../LIProfile.JPG";

import emailImage from "../email.jpg";

let imgArr = [hcbgImage, emailImage];

let workList = [
  {
    id: "1",
    project: "Test1",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: imgArr[0],
    tech:"MERN"
  },
  {
    id: "2",
    project: "Test2",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img:imgArr[1],
    tech:"MERN"
  },
  {
    id: "3",
    project: "Test3",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: {hcbgImage},
    tech:"MERN"
  },
  {
    id: "4",
    project: "Test4",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: {hcbgImage},
    tech:"MERN"
  },
  {
    id: "5",
    project: "Test5",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: {hcbgImage},
    tech:"MERN"
  },
  {
    id: "6",
    project: "Test6",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: {hcbgImage},
    tech:"MERN"
  },
  {
    id: "7",
    project: "Test7",
    projectURL:"https://rbhumbla1.github.io/README-Generator/",
    github: "https://rbhumbla1.github.io/README-Generator/" ,
    img: {hcbgImage},
    tech:"MERN"
  },
 
];

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

  h4: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1 0 20%',
    fontSize: '20px',
    paddingTop: '20px',
    color: 'DarkBlue',
    fontFamily: 'Trebuchet MS',
  },

  p: {
    textAlign: 'left',
    color: 'DarkBlue',
    fontFamily: 'Trebuchet MS',
  },
  contentColumn: {
    flex: '1 0 80%',
    padding: '1.5rem',
    /* when the screen resizes, make it so our columns don't jump in size */
    transition: 'flex-basis 500ms linear',
    marginBottom: '1.5rem'
  },

  contentColumnText: {
    position: 'relative',
    width: '79%',
    paddingTop: '0rem',
    paddingLeft: '2rem',
    fontFamily: 'Trebuchet MS',
  }

};

export default function Portfolio() {

  return (
    <div className="container" style={styles.div}>
      <div style={styles.box}>
        <h2 style={styles.h2}><b>Portfolio</b></h2>
        <br />
        <div style={styles.contentColumn}>
          <section class="row">

          { workList.map((work) => {
            console.log(work);
            return  <Project img={work.img} />
      }) }
      
            {/* <Project img={hcbgImage} />
            <Project img={hcbgImage} />
            <Project img={hcbgImage} />
            <Project img={hcbgImage} /> */}
          
          </section>
        </div>

      </div>
    </div>
  );
}
