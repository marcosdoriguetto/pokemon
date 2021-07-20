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
    color: #F3FBF4;
    `}
    &:hover {
    filter: opacity(0.6);
    }

    &.disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }
  }
`