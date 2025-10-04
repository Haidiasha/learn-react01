import { StatsTitle } from './StatTitle/StatTitle';
import { StatsList } from './StatsList/StatsList';

export const Statistics = ({ text, stats }) => {
  return (
    <div>
      <StatsTitle text={text} />
      <StatsList stats={stats} />
    </div>
  );
};
