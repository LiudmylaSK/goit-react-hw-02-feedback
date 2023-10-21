import styled from 'styled-components';

export const ButtonItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonItem = styled.li``;

export const Button = styled.button`
  padding: 10px;
  min-width: 100px;

  border: none;
  border-radius: 5px;
  color: #00f;

  font-size: 20px;
  font-weight: 600;

  box-shadow: 5px 5px 5px 2px rgba(66, 20, 66, 0.63);
`;
