import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 20px 12px;

  > header {
    display: flex;
    width: 110%;

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
