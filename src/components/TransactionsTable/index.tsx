import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, CustomColumn } from "./styles";

interface Transaction {
  title: string;
  value: number;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
              <CustomColumn value={transaction.value}>
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
