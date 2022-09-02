import React from 'react';

/** Assets */
import NFTImage from '~/assets/bored-img.svg';
import CopyIcon from '~/assets/icn-copy.svg';
import MonitorIcon from '~/assets/icn-monitor-list.svg';
import OpenSeaIcon from '~/assets/icn-opensea-list.svg';
import EtherScanIcon from '~/assets/icon-etherscan-list.svg';
import Card from '~/components/Card';

import { Container, IconsSection } from './styles';

const SummarySection: React.FC = () => {
  return (
    <Card>
      <Container>
        <header>
          <div>
            <img src={NFTImage} alt="" />
            <section>
              <h3>Bored Ape Yacht Club</h3>
              <p>
                0x6080b4.s0199...
                <img src={CopyIcon} alt="NFT Bored Ape Yacht Club Avatar" />
              </p>
            </section>
          </div>

          <IconsSection>
            <img src={MonitorIcon} alt="Monitor Icon" />
            <img src={OpenSeaIcon} alt="OpenSea Icon" />
            <img src={EtherScanIcon} alt="EtherScan Icon" />
          </IconsSection>
        </header>
      </Container>
    </Card>
  );
};

export default SummarySection;
