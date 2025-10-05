import { Stat } from './Stat/Stat';
import { List } from './StatsList.styled';
export const StatsList = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => (
        <Stat
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        ></Stat>
      ))}
    </List>
  );
};
