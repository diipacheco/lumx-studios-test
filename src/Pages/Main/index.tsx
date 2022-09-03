import React from 'react';

import BubbleChart from '~/components/BubbleChart';
import Sales from '~/components/Sales';
import SummarySection from '~/components/SummarySection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <SummarySection />
      <Sales />
      <BubbleChart />
    </Container>
  );
};

export default Main;
