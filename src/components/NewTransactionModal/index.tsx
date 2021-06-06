import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { CustomModal } from "../../styles/customModal";
import { CloseModalButton } from "../CloseModalButton";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
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
  const [transactionType, setTransactionType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, category, value, createdAt: new Date() };

    api.post("/transactions", data);
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
            isSelected={transactionType === "deposit"}
            selectedColor="red"
            onClick={() => setTransactionType("deposit")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setTransactionType("withdraw")}
            isSelected={transactionType === "withdraw"}
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
