import styled from 'styled-components';

export const Button = styled.button`
  border: 0;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: transparent;

  transition:filter 0.2s;

  &:hover {
      filter: brightness(0.7);
  }
`;
