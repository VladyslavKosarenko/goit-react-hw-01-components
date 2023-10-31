import styled from "styled-components";
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}
const TransactionHistoryTable = styled.table`

list-style: none;
margin: 0 auto;
text-align: center;

`



