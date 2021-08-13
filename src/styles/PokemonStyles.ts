import styled, { css } from "styled-components";

type BackgroundProps = {
  type: string;
}

export const Content = styled.div`
  width: 70vw;
  margin: 0 auto;

  @media(max-width: 710px) {
    width: 85vw;
  }

  @media(max-width: 320px) {
    width: 90vw;
  }

  @media(max-width: 290px) {
    width: 94vw;
  }
`

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding-top: 1rem;

  @media(max-width: 1330px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContentInput = styled.form`
  width: 100%;

  input {
    width: calc(100% - 36px);
    padding: 0.6rem;
    outline: none;
    border: 2px solid var(--secondary);
    border-radius: 4px 0 0 4px;
  }

  button {
    border-radius: 0 4px 4px 0;
    padding-block: 5px;
    width: 36px;
    position: absolute;
  }
`

export const ContentInputImage = styled.img`
  display: flex;
  margin: 0 auto;
  width: 24px;
  height: 24px;
`

export const ContentSort = styled.div`
  display: flex;
  gap: 10px;

  @media(max-width: 470px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    input {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    > :nth-child(1) {
      grid-row-start: 2;
    }
  }
`

export const ContentButtonSort = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  flex: 1;
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const ContentPokemon = styled.div<BackgroundProps>`
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 5px;
  padding-inline: 10px;

  h1 {
    text-align: center;
  }

  ${props => props.type && css`
    background-color: var(--${props.type});
    `}
`

export const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const InfoTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 32px;
    height: 32px;
  }
`

export const InfoType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const ContentTypesOrganization = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > :nth-child(1) {
    flex: 3;
  }
`

export const ImagePokemon = styled.img`
  width: 96px;
  height: 96px;
`