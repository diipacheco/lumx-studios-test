import React from 'react';

/** Assets */
import ArrowDown from '~/assets/arrow-down.svg';
import ArrowUp from '~/assets/arrow-up.svg';
import NFTImage from '~/assets/bored-img.svg';
import CopyIcon from '~/assets/icn-copy.svg';
import MonitorIcon from '~/assets/icn-monitor-list.svg';
import OpenSeaIcon from '~/assets/icn-opensea-list.svg';
import EtherScanIcon from '~/assets/icon-etherscan-list.svg';
import PriceIcon from '~/assets/price-icon.svg';
/** Components */
import Card from '~/components/Card';

/** Styles */
import { Container, Details, IconsSection, PercentageNumber } from './styles';

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

        <Details>
          <div>
            <section>
              <h3>Lifetime</h3>
              <p>453d</p>
            </section>
            <section>
              <h3>Items</h3>
              <p>10K</p>
            </section>
            <section>
              <h3>Floor</h3>
              <p>
                <img src={PriceIcon} alt="Price Icon" />
                145
              </p>
            </section>
          </div>
          <div>
            <section>
              <h3>Royaltes</h3>
              <p>7,5%</p>
            </section>
            <section>
              <h3>Vol 24H</h3>
              <p>
                <img src={PriceIcon} alt="Price Icon" />
                1.581K
              </p>
              <div>
                <PercentageNumber type="up">
                  <img src={ArrowUp} alt="Arrow Up Icon" />
                  12,02%
                </PercentageNumber>
              </div>
            </section>
            <section>
              <h3>VOL 7D</h3>
              <p>
                <img src={PriceIcon} alt="Price Icon" />
                12.9K
              </p>
              <div>
                <PercentageNumber type="down">
                  <img src={ArrowDown} alt="Arrow Down Icon" />
                  12,02%
                </PercentageNumber>
              </div>
            </section>
          </div>
        </Details>
      </Container>
    </Card>
  );
};

export default SummarySection;
