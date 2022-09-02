import { render } from '@testing-library/react';

import Header from '../index';

describe('Header Component', () => {
  it('should be able to render correctly', () => {
    const { getByRole, getByAltText } = render(<Header />);

    const text = getByRole('heading', { name: /71 GWEI/i });
    const logo = getByAltText('Logo seamore');

    expect(text).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
