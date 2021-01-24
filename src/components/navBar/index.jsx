import React from 'react';
import styled from 'styled-components';
import Marginer from '../marginer/index';
import Logo from '../logo';
import Button from '../button';

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: flex-row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgba(200, 200, 200);
  }
`;

export default function NavBar(props) {
  return(
    <NavBarContainer>
      <BrandContainer>
        <Logo inline/>
      </BrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton small>Login</LoginButton>
      </AccessibilityContainer>
    </NavBarContainer>
  );
}