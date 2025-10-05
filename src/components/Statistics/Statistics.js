import { StatsTitle } from './StatTitle/StatTitle';
import { StatsList } from './StatsList/StatsList';
import { Box } from './Statistics.styled';
export const Statistics = ({ text, stats }) => {
  return (
    <Box>
      <StatsTitle text={text} />
      <StatsList stats={stats} />
    </Box>
  );
};
