import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    max-width: 100%;
    padding: var(--spacing-none);
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: var(--spacing-48);
  padding-top: var(--spacing-24);
  margin: var(--spacing-none);
  margin-top: var(--spacing-36);
  padding: var(--spacing-none);
  list-style: none;
`

export const S = {
    Container,
    SpinnerContainer
}