import React from 'react';

import Button from '~/components/Button';
import Card from '~/components/Card';

import { Container, RowContainer } from './styles';

const Sales: React.FC = () => {
  return (
    <Container>
      <Card>
        <RowContainer>
          <div>
            <h3>Sales</h3>
          </div>
          <div>
            <p>Showing 2300 sales.</p>
          </div>
        </RowContainer>

        <RowContainer>
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
