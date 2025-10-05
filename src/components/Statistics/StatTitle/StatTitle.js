import { Title } from './StatTitle.styled';

export const StatsTitle = ({ text }) => {
  return <Title>{text.toUpperCase()}</Title>;
};
