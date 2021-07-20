import styled, { css } from "styled-components";

type BackgroundProps = {
  next: boolean;
}

export const ButtonPage = styled.button<BackgroundProps>`
  width: 45%;
  padding-block: 0.5rem;
  &:not(:disabled){
    border: 2px solid var(--secondary);
    background-color: transparent;
    color: var(--secondary);
    border-radius: 5px;
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
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
  border: 1px solid var(--textColor);
  border-radius: 3px;
  transition: 0.15s ease-in;

  img {
    width: 22px;
    height: 22px;
  }

  &.disabled {
    background-color: white;
    border: 1px solid var(--secondary);
  }
`