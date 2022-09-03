import React from 'react';

import Sales from '~/components/Sales';
import SummarySection from '~/components/SummarySection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <SummarySection />
      <Sales />
    </Container>
  );
};

export default Main;
