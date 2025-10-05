import { Head } from './Head/Head';
import { Raw } from './Raw/Raw';
import { Table } from './TransactionHistory.styled';
import { Tr } from './Head/Head.styled';
export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Head title="type" />
          <Head title="amount" />
          <Head title="currency" />
        </Tr>
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
    </Table>
  );
};
