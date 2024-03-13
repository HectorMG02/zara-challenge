import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: var(--spacing-8);
  border-bottom: 0.1rem solid var(--colors-black);
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-left: var(--spacing-12);
  color: var(--colors-black);
  text-transform: uppercase;

  &::placeholder {
    text-transform: uppercase;
    color: var(--colors-dark-gray);
  }
`;

export const S = {
    InputWrapper,
    StyledInput,
};