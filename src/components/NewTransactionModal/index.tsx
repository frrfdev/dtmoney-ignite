import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { CustomModal } from "../../styles/customModal";
import { CloseModalButton } from "../CloseModalButton";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState("deposit");

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <CloseModalButton onRequestClose={onRequestClose} />

        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

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

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </CustomModal>
  );
}
