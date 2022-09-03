import React, { useMemo } from 'react';

import PriceIcon from '~/assets/price-icon.svg';
import Card from '~/components/Card';

import { Container, ListContent } from './styles';

const List: React.FC = () => {
  const data = useMemo(
    () => [
      {
        name: 'fur',
        type: 'cross',
        percentage: 1.49,
        price: 192.4,
      },
      {
        name: 'mouth',
        type: 'bored',
        percentage: 0.49,
        price: 190.7,
      },
      {
        name: 'eyes',
        type: 'cyborg',
        percentage: 1.08,
        price: 167.9,
      },
      {
        name: 'earring',
        type: 'dmt',
        percentage: 2.15,
        price: 159.3,
      },
      {
        name: 'fur',
        type: 'cross',
        percentage: 1.49,
        price: 192.4,
      },
      {
        name: 'mouth',
        type: 'bored',
        percentage: 0.49,
        price: 190.7,
      },
      {
        name: 'earring',
        type: 'dmt',
        percentage: 2.15,
        price: 159.3,
      },
      {
        name: 'fur',
        type: 'cross',
        percentage: 1.49,
        price: 192.4,
      },
    ],
    [],
  );
  return (
    <Container>
      <Card>
        <ListContent>
          {data.map(coin => (
            <li key={coin.name}>
              <section>
                <div>
                  <h5>{coin.name}:</h5>
                  <p>{coin.type}</p>
                </div>
                <div>
                  <article>
                    <p>{coin.percentage}%</p>
                  </article>
                  <article>
                    <p>
                      <img src={PriceIcon} alt="Price Icon" />
                      {coin.price}
                    </p>
                  </article>
                </div>
              </section>
            </li>
          ))}
        </ListContent>
      </Card>
    </Container>
  );
};

export default List;
