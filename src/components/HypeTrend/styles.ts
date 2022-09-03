import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 40px;
`;

export const Content = styled.section`
  display: flex;
  padding: 12px 15px;
  flex-direction: column;
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    height: 56px;
    border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
    margin-left: -14px;
    margin-right: -14px;
    padding: 0 12px;

    > h6 {
      font-size: 13px;
      font-weight: 500;
      color: ${props => props.theme.colors.lightPurple};
    }

    > ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-left: 8px;
    }
  }

  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    > h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

interface IDaysButton {
  active?: boolean;
}

export const DaysButton = styled.button<IDaysButton>`
  width: 36px;
  height: 28px;

  background: ${props =>
    props.active
      ? 'linear-gradient(90deg, #a71a6b -56.82%, #7b209b 100%)'
      : 'transparent'};
  border-radius: 2px;

  font-weight: 700;
  font-size: 15px;
  color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.darkGrey};
`;

export const HypeButton = styled.button`
  display: flex;
  align-items: center;
  width: 131px;
  height: 30px;
  background: rgba(77, 188, 25, 0.1);
  border-radius: 2px;
  padding: 6px 12px;
  font-weight: 700;
  font-size: 13px;
  color: #4dbc19;
  text-transform: uppercase;

  > img {
    height: 18px;
    margin-right: 12px;
  }
`;
