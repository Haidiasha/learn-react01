import { Head } from './Head/Head';
import { Raw } from './Raw/Raw';
export const Transactions = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <Head title="type" />
          <Head title="amount" />
          <Head title="currency" />
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Raw
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
