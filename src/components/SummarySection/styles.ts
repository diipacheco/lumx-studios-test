import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;

  > header {
    display: flex;
    justify-content: space-between;

    margin-left: -12px;
    margin-right: -12px;
    padding: 0 12px;

    border-bottom: 1px solid ${props => props.theme.colors.lightPurple};
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      > section {
        display: flex;
        flex-direction: column;
        margin-left: 8px;

        > h3 {
          font-size: 16px;
          line-height: 24px;
        }

        > p {
          display: flex;
          align-items: center;
          line-height: 24px;

          font-weight: 400;
          font-size: 13px;
          color: ${props => props.theme.colors.darkGrey};

          > img {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

export const IconsSection = styled.div`
  display: flex;
  margin-left: 36px;
  > img {
    height: 24px;
    margin-right: 6px;
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  > div + div {
    margin-top: 22px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h3 {
        color: ${props => props.theme.colors.darkGrey};
        font-size: 13px;
        line-height: 24px;
        text-transform: uppercase;
      }

      > p {
        margin-top: 4px;
        font-size: 18px;
        line-height: 24px;

        > img {
          margin-right: 4px;
        }
      }
    }
  }
`;

interface IPercentageNumber {
  type: 'up' | 'down';
}

const downColor = css`
  color: ${props => props.theme.colors.red};
`;

const upColor = css`
  color: ${props => props.theme.colors.green};
`;

export const PercentageNumber = styled.p<IPercentageNumber>`
  > img {
    margin-right: 9px;
  }

  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  margin-top: 4px;

  ${props => {
    if (props.type === 'up') {
      return upColor;
    } else if (props.type === 'down') {
      return downColor;
    }
  }}
`;
