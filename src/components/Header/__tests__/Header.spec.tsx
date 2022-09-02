import { render } from '~/utils/tests';

import Header from '../index';

describe('Header Component', () => {
  it('should be able to render correctly', () => {
    const { getByRole, getByAltText, getByTestId } = render(<Header />);

    const text = getByRole('heading', { name: /71 GWEI/i });
    const logo = getByAltText('Logo seamore');
    const searchIcon = getByAltText('Search Icon');
    const hamburgerMenu = getByTestId('hamburger-menu');

    expect(text).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(hamburgerMenu).toBeInTheDocument();
  });
});
