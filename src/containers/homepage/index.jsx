import React from 'react';
import styled from 'styled-components';
import TopSection from './topSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Homepage = (props) => {
  return (
    <PageContainer>
      <TopSection />
    </PageContainer>
  );
}

export default Homepage;