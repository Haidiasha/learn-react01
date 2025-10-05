import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${getRandomHexColor};
  padding: 8px;
  width: 100%;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
