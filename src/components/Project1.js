//import React from 'react';
//import styled from "@emotion/styled/macro";
import styled from "styled-components";
import img from './email.jpg';

export const Project = styled.div`
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "White",
    position: "relative",
    width: "500px",
    height: "350px",
    cursor: "pointer",
    background: ${props => props.img},
    
  `;

  export const ProjectDisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
  });
  
  export const ProjectBigTitle = styled.h2({
    textTransform: "uppercase",
    fontFamily: "Helvetica",
  });

  export const BooksSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100wh;
`;
export const BookCard = styled.div`
  width: 50%;
  height: 500px;
  padding: 20px 0;
  background: ${props => props.img};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BookCardHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.7);
  visibility: ${({ display }) => (display ? "100" : "hidden")};
`;
