import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import Card from '~/components/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['07:00', '08:00', '09:00', '10:00'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(135, 117, 208)',
      backgroundColor: 'rgb(135, 117, 208, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(128, 204, 244)',
      backgroundColor: 'rgb(128, 204, 244, 0.5)',
    },
  ],
};

import { Container } from './styles';

const LineChart: React.FC = () => {
  return (
    <Container>
      <Card>
        <Line options={options} data={data} />
      </Card>
    </Container>
  );
};

export default LineChart;
