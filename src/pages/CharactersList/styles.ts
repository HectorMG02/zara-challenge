import styled from 'styled-components';
import * as media from '../../theme/media-queries';


const Container = styled.div`
  position: relative;

  padding: var(--spacing-48);
  padding-top: var(--spacing-60);
  
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


export const S = {
    Container,
    StyledGrid,
    SpinnerContainer,
}