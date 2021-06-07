import styled from 'styled-components';
import Modal from 'react-modal';

export const CustomModal = styled(Modal)`
  .ReactModal__Overlay {
    background: red;
  }

  background: rgba(0,0,0, 0.1);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  form:first-child {
    width: 100%;
    max-width: 576px;

    background: var(--background);

    padding: 3rem;

    position: relative;

    border-radius: 0.5rem;
  }
`;
