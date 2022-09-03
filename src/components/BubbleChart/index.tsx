import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bubble } from 'react-chartjs-2';

import Button from '~/components/Button';
import Card from '~/components/Card';

import { ChartContainer, Container, Content } from './styles';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({ length: 10 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: '#8775D0',
    },
    {
      label: 'Blue dataset',
      data: Array.from({ length: 10 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: '#80CCF4',
    },
    {
      label: 'Green dataset',
      data: Array.from({ length: 10 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: '#98BBAF',
    },
  ],
};

const BubbleChart: React.FC = () => {
  return (
    <Container>
      <Card>
        <Content>
          <header>
            <div>
              <h5>Price in ETH</h5>
            </div>
            <div>
              <h6>Outliers:</h6>
              <Button typeButton="switcher" active>
                ON
              </Button>
              <Button typeButton="switcher">OFF</Button>
            </div>
          </header>
          <ChartContainer>
            <Bubble options={options} data={data} />
          </ChartContainer>
        </Content>
      </Card>
    </Container>
  );
};

export default BubbleChart;
