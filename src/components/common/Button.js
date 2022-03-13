import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? '#00d4ff' : '#090979')};
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1rem;
        `}

  border: none;
  box-shadow: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    color: #666;
    background: #eee;
  }
`;

export { Button };
