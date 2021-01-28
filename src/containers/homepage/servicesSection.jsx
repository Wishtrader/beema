import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTitle';
import Marginer from '../../components/marginer';
import OurService from '../../components/ourService';

import Service1Img from '../../assets/illustrations/web_development_1.png';
import Service2Img from '../../assets/illustrations/mobile_phone.png';
import Service3Img from '../../assets/illustrations/web_development_2.png';


const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export default function ServicesSection(props) {
  return (
  <ServicesContainer name="servicesSection">
    <SectionTitle>Best Quality Software</SectionTitle>
    <Marginer direction="vertical" margin="3em" />
    <OurService 
      title="Fully integrated services" 
      description="We build and deliver fully integrated webapps
        with customized control panels that fit your 
        compnay needs"  
      imgUrl={Service1Img}
    />
    <OurService 
      title="Mobile optimized" 
      description="We build and deliver fully integrated webapps
        with customized control panels that fit your 
        compnay needs"  
      imgUrl={Service2Img}
      isReversed
    />
    <OurService 
      title="Quality is our priority" 
      description="We have teams of professional developers, designers
and managers that ensures delivering the best 
software quality for your company"  
      imgUrl={Service3Img}
    />
  </ServicesContainer>
  );
}