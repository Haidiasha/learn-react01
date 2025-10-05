import { Item } from './Stat.styled';

export const Stat = ({ label, percentage }) => {
  return (
    <Item>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Item>
  );
};
