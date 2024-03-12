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

export const S = {
    Container,
    StyledGrid,
}