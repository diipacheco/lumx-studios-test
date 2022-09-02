import { render } from '~/utils/tests';

import SummarySection from '../index';

describe('SummarySection Component', () => {
  it('should be able to render correctly', () => {
    const { getByRole, getByAltText, getByText } = render(<SummarySection />);

    const nftName = getByRole('heading', { name: /Bored Ape Yacht Club/i });
    const nftId = getByText('0x6080b4.s0199...');
    const nftImage = getByAltText('NFT Bored Ape Yacht Club Avatar');

    expect(nftName).toBeInTheDocument();
    expect(nftId).toBeInTheDocument();
    expect(nftImage).toBeInTheDocument();
  });
});
