import { render } from '~/utils/tests';

import Card from '../index';

describe('Card Component', () => {
  it('should be able to render the children component correctly', () => {
    const { getByText } = render(
      <Card>
        <div>some react node</div>
      </Card>,
    );

    const text = getByText('some react node');

    expect(text).toBeInTheDocument();
  });
});
