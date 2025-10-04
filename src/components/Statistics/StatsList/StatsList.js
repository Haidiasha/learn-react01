import { Stat } from './Stat/Stat';
export const StatsList = ({ stats }) => {
  return (
    <ul>
      {stats.map(stat => (
        <Stat
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        ></Stat>
      ))}
    </ul>
  );
};
