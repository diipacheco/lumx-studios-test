import React from 'react';

import Button from '~/components/Button';
import Card from '~/components/Card';

import { Container, RowContainer } from './styles';

interface ISales {
  title: string;
  showingSales?: boolean;
}

const Sales: React.FC<ISales> = ({ title, showingSales }) => {
  return (
    <Container>
      <Card>
        <RowContainer showingSales={showingSales}>
          <div>
            <h3>{title}</h3>
          </div>
          {showingSales && (
            <div>
              <p>Showing 2300 sales.</p>
            </div>
          )}
        </RowContainer>

        <RowContainer showingSales>
          <div>
            <h4>Time:</h4>
          </div>
          <div>
            <Button typeButton="default" active>
              24hrs
            </Button>
            <Button typeButton="default">7D</Button>
          </div>
        </RowContainer>
      </Card>
    </Container>
  );
};

export default Sales;
