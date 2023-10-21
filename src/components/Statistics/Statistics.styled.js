import styled from 'styled-components';

export const SpansList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SpansListItem = styled.li`
  font-weight: 700;
  font-size: 18px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: space-between;

  text-transform: capitalize;
  font-size: 25px;
  font-weight: 700;
`;
