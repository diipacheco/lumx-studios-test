import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 16px;
`;

export const ListContent = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    border-bottom: 1px solid ${props => props.theme.colors.lightPurple};
    padding: 15px 12px;

    > section {
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;

        > h5 {
          font-weight: 700;
          font-size: 14px;
          color: #8775d0;
          text-transform: uppercase;
        }

        > article + article {
          margin-left: 32px;

          > p img {
            margin-right: 8px;
          }
        }

        > p {
          font-weight: 700;
          font-size: 15px;
          margin-left: 2px;
          text-transform: uppercase;
        }
      }
    }
  }
`;
