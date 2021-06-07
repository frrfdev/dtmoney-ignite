import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
          color: var(--text-body);
          font-weight: 400;
          padding: 1rem 2rem;
          text-align: left;
          line-height: 1.5rem;;
      }
  }
`;

interface CustomColumnProps {
    type?: string;
}

export const CustomColumn = styled.td<CustomColumnProps>`
    color: ${props => props.type ? props.type === 'deposit' ? 'var(--green)' : 'var(--red)' : 'var(--text-body)'};
    background: var(--shape);

    padding: 1rem 2rem;

    border: 0;
    border-radius: 0.25rem;

    &:first-child {
        color: var(--text-title);
    }
`;
