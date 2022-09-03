import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 16px;
`;

export const Content = styled.section`
  padding: 16px;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }

    > div h5 {
      font-size: 12px;
      color: ${props => props.theme.colors.darkGrey};
      text-transform: uppercase;
    }

    > div h6 {
      font-size: 13px;
      color: ${props => props.theme.colors.darkGrey};
      margin-right: 12px;
    }
  }
`;

export const ChartContainer = styled.section`
  margin-top: 16px;
`;
