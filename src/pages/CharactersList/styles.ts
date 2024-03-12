import styled, { keyframes } from 'styled-components';
import * as media from '../../theme/media-queries';

const Container = styled.div`
position: relative;
  padding: var(--spacing-48);
  padding-top: var(--spacing-8);

  ${media.extraSmallMedia} {
    padding: var(--spacing-none);
    padding-top: var(--spacing-none);
  }

`;

const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.9rem, 1fr));
  gap: var(--spacing-16);

  margin: var(--spacing-none);
  margin-top: var(--spacing-36);
  padding: var(--spacing-none);
  list-style: none;

  ${media.lteSmallMedia} {
    grid-template-columns: repeat(auto-fill, minmax(17.2rem, 1fr));
  }
`;

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const ShieldSpinner = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Captain_America_Shield.svg/768px-Captain_America_Shield.svg.png');
  background-size: cover;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;



export const S = {
    Container,
    StyledGrid,
    SpinnerContainer,
    ShieldSpinner
}