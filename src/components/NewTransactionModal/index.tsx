import { useContext } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { CustomModal } from "../../styles/customModal";
import { CloseModalButton } from "../CloseModalButton";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const { createTransaction } = useContext(TransactionsContext);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({ title, category, value, type });
  }

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container onSubmit={(e) => handleCreateNewTransaction(e)}>
        <CloseModalButton onRequestClose={onRequestClose} />

        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isSelected={type === "deposit"}
            selectedColor="red"
            onClick={() => setType("deposit")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isSelected={type === "withdraw"}
            selectedColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </CustomModal>
  );
}
