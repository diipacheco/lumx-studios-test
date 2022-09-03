import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 54px;
`;

interface IRowContainer {
  showingSales?: boolean;
}

export const RowContainer = styled.section<IRowContainer>`
  display: flex;
  align-items: center;

  justify-content: ${props =>
    props.showingSales ? 'space-between' : 'center'};

  padding: 12px;

  > div {
    display: flex;
  }

  > div h3 {
    font-size: 18px;
  }
  > div p {
    color: ${props => props.theme.colors.darkGrey};
    font-weight: 700;
    font-size: 14px;
  }

  > div h4 {
    font-size: 13px;
    color: ${props => props.theme.colors.lightPurple};
  }
`;
