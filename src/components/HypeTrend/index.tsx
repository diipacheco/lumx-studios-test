import React from 'react';

import TrendingUpIcon from '~/assets/trending-up.svg';
import Card from '~/components/Card';

import { Container, Content, DaysButton, HypeButton } from './styles';

const HypeTrend: React.FC = () => {
  return (
    <Container>
      <Card>
        <Content>
          <header>
            <h6>Time:</h6>
            <ul>
              <li>
                <DaysButton active>1M</DaysButton>
              </li>
              <li>
                <DaysButton>5M</DaysButton>
              </li>
              <li>
                <DaysButton>15M</DaysButton>
              </li>
              <li>
                <DaysButton>30M</DaysButton>
              </li>
              <li>
                <DaysButton>1H</DaysButton>
              </li>
              <li>
                <DaysButton>1D</DaysButton>
              </li>
            </ul>
          </header>
          <section>
            <h4>Hype Trend</h4>
            <HypeButton>
              <img src={TrendingUpIcon} alt="Trending Up Icon" />
              Very Hyped
            </HypeButton>
          </section>
        </Content>
      </Card>
    </Container>
  );
};

export default HypeTrend;
