import styled from "styled-components";

export const Content = styled.div`
  min-width: 300px;
  max-width: 18%;
  margin: 0 auto;
`
export const ContentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 2px solid var(--secondary);
  border-radius: 4px;
  margin-bottom: 0.3rem;
`

export const ContentButtonSort = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const ContentPokemon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;  
  gap: 2rem;
  background-color: #ffff;
  border-radius: 5px;
  margin: 0.75rem 0;
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
`

export const InfoType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`