import closeIcon from "../../assets/close.svg";
import { Button } from "./styles";

interface CloseModalButtonProps {
  onRequestClose: () => void;
}

export function CloseModalButton({ onRequestClose }: CloseModalButtonProps) {
  return (
    <Button type="button" onClick={onRequestClose}>
      <img src={closeIcon} alt="Fechar Modal" />
    </Button>
  );
}
