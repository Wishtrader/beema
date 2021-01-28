import React from 'react';
import styled from 'styled-components';
import TopSection from './topSection';
import ServicesSection from './servicesSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Homepage = (props) => {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
    </PageContainer>
  );
}

export default Homepage;