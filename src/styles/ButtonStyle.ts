import styled, { css } from "styled-components";

type BackgroundProps = {
  next: boolean;
}

export const ButtonPage = styled.button<BackgroundProps>`
  width: 45%;
  padding-block: 0.5rem;
  border-width: 1px;
  border-radius: 5px;

  &:not(:disabled){
    border: 2px solid var(--secondary);
    background-color: transparent;
    color: var(--secondary);
    transition: filter 0.2s;

   ${props => props.next && css`
    background-color: var(--secondary);
    color: white;
    `}
    &:hover {
    filter: opacity(0.85);
    }
  }
`

export const ButtonSort = styled.button`
  padding: 4px 6px 2px 6px;
  border: 1px solid #6666;
  border-radius: 3px;
  transition: 0.15s ease-in;
  max-height: 38px;

  img {
    width: 22px;
    height: 22px;
  }
  
  &:not(:disabled) {
    border-color: var(--textColor);

    &.disabled {
      background-color: white;
      border-color: var(--secondary);
    }
  }
`