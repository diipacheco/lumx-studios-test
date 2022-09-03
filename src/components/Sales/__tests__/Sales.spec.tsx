import { render } from '~/utils/tests';

import Sales from '../index';

describe('Sales Component', () => {
  it('should be able to render correctly', () => {
    const { getByRole, getByText } = render(<Sales />);

    const heading = getByRole('heading', { name: /Sales/i });
    const salesNumber = getByText(/Showing 2300 sales./i);

    expect(heading).toBeInTheDocument();
    expect(salesNumber).toBeInTheDocument();
  });
});
