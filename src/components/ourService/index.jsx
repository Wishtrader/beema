import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 5em
`;

const ServiceImg = styled.img``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px; 
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 60%;
`;

export default function OurService(props) {
  const { imgUrl, title, description, isReversed } = props;
  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
}