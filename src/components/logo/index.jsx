import React from 'react';
import styled, { css } from 'styled-components';

import Logotype from '../../assets/logo/logo.png';
import { theme } from '../../theme';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => inline ? "row" : "column"};
  align-items: ${({inline}) => inline && "center"};
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) => 
  inline && 
  css`
    width: 24px;
    height: 24px;
    margin-right: 6px;
  `};
`;

const LogoText = styled.h1`
  margin-top: ${({ inline }) => inline ? "12px" : "6px"};
  font-size: ${({ inline }) => inline ? "18px" : "40px"};
  color: ${({ inline }) => inline ? "#fff" : theme.primary};
  font-weight: 900;
`;

export default function Logo(props) {
  const { inline } = props;
  return (
    <LogoContainer inline={inline}>
      <LogoImg src={Logotype} inline={inline} />
      <LogoText inline={inline}>Beema</LogoText>
    </LogoContainer>
  );
}