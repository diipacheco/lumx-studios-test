import React from 'react';

import BubbleChart from '~/components/BubbleChart';
import HypeTrend from '~/components/HypeTrend';
import LineChart from '~/components/LineChart';
import List from '~/components/List';
import Sales from '~/components/Sales';
import SummarySection from '~/components/SummarySection';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <SummarySection />
      <Sales title="Sales" showingSales />
      <BubbleChart />
      <Sales title="Sales Floor and Average Price" />
      <LineChart />
      <HypeTrend />
      <List />
    </Container>
  );
};

export default Main;
