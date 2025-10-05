import { Td, Tr } from './Raw.styled';
export const Raw = ({ type, amount, currency }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};
