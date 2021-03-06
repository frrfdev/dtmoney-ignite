import { useTransactions } from "../../hooks/useTransactions";
import { Container, CustomColumn } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <CustomColumn>{transaction.title}</CustomColumn>
              <CustomColumn type={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "brl",
                }).format(transaction.value)}
              </CustomColumn>
              <CustomColumn>{transaction.category}</CustomColumn>
              <CustomColumn>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </CustomColumn>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
