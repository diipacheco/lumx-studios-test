import { render } from '@testing-library/react';

import Header from '../index';

describe('Header Component', () => {
  it('should be able to render correctly', () => {
    const { getByText } = render(<Header />);

    const text = getByText('71 GWEI');

    expect(text).toBeInTheDocument();
  });
});
