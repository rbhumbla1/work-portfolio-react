import React from 'react';
import styled from "@emotion/styled/macro";
import img from "../LIProfile.JPG";

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "500px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: `url(${img})`,
});

const DisplayOver = styled.div({
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

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

export default class Work extends React.Component {
  render() {
    return (
      <div className="Work">
        <Background>
          <DisplayOver>
            <BigTitle>Really Cool Title!</BigTitle>
            <Hover>
              <SubTitle>You could vacation here!</SubTitle>
              <Paragraph>
                More description about this really cool random desert photo from
                unsplash!
              </Paragraph>
              <CTA>View More +</CTA>
            </Hover>
          </DisplayOver>
        </Background>
      </div>
    );
  }
}
