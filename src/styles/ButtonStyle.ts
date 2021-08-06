import styled, { css } from "styled-components";

type BackgroundProps = {
  next: boolean;
}

export const ButtonPage = styled.button<BackgroundProps>`
  width: 10%;
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

  @media(max-width: 1100px) {
    width: 20%;
  }

  @media(max-width: 540px) {
    width: 25%;
  }
`

export const ButtonSort = styled.button`
  width: 40px;
  padding-inline: 8px;
  border: 1px solid #6666;
  border-radius: 3px;
  transition: 0.15s ease-in;
  max-height: 38px;

  img {
    width: 20px;
    height: 20px;
  }
  
  &:not(:disabled) {
    border-color: var(--textColor);

    &.disabled {
      background-color: white;
      border-color: var(--secondary);
    }
  }
`