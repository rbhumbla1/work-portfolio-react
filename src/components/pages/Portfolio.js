import React from 'react';
import Project from "../Project";

import budgetly from "../images/budget.jpg";
import outdoor from "../images/outdoor.jpg";
import blog from "../images/blog.jpg";
import editor from "../images/pwa.jpg";
import note from "../images/note.jpg";
// import network from '../images/network.jpg';
// import eCom from "../images/ecom.jpg";
// import quiz from "../images/quiz.jpg";
import hitched from "../images/hitched.jpg";


let imgArr = [hitched, budgetly, outdoor, blog, editor, note ];

let projList = [
  {
    id: "1",
    project: "Hitched",
    projectURL:"https://hitched.herokuapp.com/",
    github: "https://github.com/AdMarom/Hitched-Wedding-App" ,
    img: imgArr[0],
    tech:"MERN"
  },
  {
    id: "2",
    project: "Group Project: Budgetly",
    projectURL:"https://budgetly.herokuapp.com/",
    github: "https://github.com/rbhumbla1/Budgetly",
    img: imgArr[1],
    tech:"MVC: MySQL,Handlebars,Express"
  },
  {
    id: "3",
    project: "Group Project: OutdoorsyISH",
    projectURL:"https://rbhumbla1.github.io/outdoorsyISH/",
    github: "/https://github.com/rbhumbla1/outdoorsyISH" ,
    img:imgArr[2],
    tech:"National Park Service(NPS) Public API, Openlayers, Foundation"
  },
  {
    id: "4",
    project: "Tech Blog",
    projectURL:"https://serene-fjord-12187.herokuapp.com/",
    github: "https://github.com/rbhumbla1/Tech-Blog" ,
    img: imgArr[3],
    tech:"Node.js, Sequilize, ORM"
  },
  {
    id: "5",
    project: "J.A.T.E",
    projectURL:"https://secret-sierra-86705.herokuapp.com/",
    github: "https://github.com/rbhumbla1/Text-Editor-PWA" ,
    img: imgArr[4],
    tech:"PWA Text Editor"
  },
  {
    id: "5",
    project: "Note Taker",
    projectURL:"https://limitless-island-97368.herokuapp.com/",
    github: "https://github.com/rbhumbla1/Note-Taker" ,
    img: imgArr[5],
    tech:"Express, Jest"
  },

  // {
  //   id: "7",
  //   project: "E-Commerce Back End",
  //   projectURL:"",
  //   github: "https://github.com/rbhumbla1/E-Commerce-Back-End" ,
  //   img: imgArr[6],
  //   tech:"MySQL, Sequilize, Express, Insomnia"
  // },
  // {
  //   id: "8",
  //   project: "Social Network API",
  //   projectURL:"",
  //   github: "https://github.com/rbhumbla1/Social-Network-API" ,
  //   img: imgArr[7],
  //   tech:"MongoDB, Mongoose ODM, Express.js"
  // },
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
    fontSize: '20px',
    paddingTop: '20px',
    //color: 'DarkBlue',
    color: '#1d3557',
    fontFamily: 'Permanent Marker',
  },

  p: {
    textAlign: 'left',
    color: 'DarkBlue',
    fontFamily: 'Permanent Marker',
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
    fontFamily: 'Permanent Marker',
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

          { projList.map((proj) => {
            console.log("in portfolio ", proj);
             return <Project {...proj}/>
      }) }
      
          </section>
        </div>

      </div>
    </div>
  );
}
