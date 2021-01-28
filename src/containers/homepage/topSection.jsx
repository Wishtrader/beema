import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';

import Marginer from '../../components/marginer/';

import BackgroundImg from '../../assets/pictures/bg.png';
import Logo from '../../components/logo/';
import Button from '../../components/button';
import DownArrow from '../../components/downArrow/index';
import NavBar from '../../components/navBar/index';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

const TopSection = (props) => {

const scrollToNextSection = () => {
  scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
}

  return (
    <Element name="topSection">
    <TopContainer>
      <BackgroundFilter >
      <NavBar />
      <Marginer direction="vertical" margin="8em" />
        <Logo />
        <Marginer direction="vertical" margin="4em" />
        <MotivationalText>Software Development</MotivationalText>
        <MotivationalText>From the Best in the Industry</MotivationalText>
        <Marginer direction="vertical" margin="2em" />
        <Button>Start Your Project</Button>
        <DownArrowContainer onClick={scrollToNextSection}>
          <DownArrow />
        </DownArrowContainer>
      </BackgroundFilter>
    </TopContainer>
    </Element>
  );
}

export default TopSection