import { Container } from "./styles";
import { CustomModal } from "../../styles/customModal";
import { CloseModalButton } from "../CloseModalButton";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <CloseModalButton onRequestClose={onRequestClose} />

        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </CustomModal>
  );
}
