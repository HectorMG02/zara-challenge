import styled from 'styled-components';
import * as media from '../../theme/media-queries';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--colors-light-gray);

  width: 100%;
  height: 8.4rem;
  padding: var(--spacing-16) var(--spacing-48);
  box-sizing: border-box;

  background-color: var(--colors-black);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
  }
 
  overflow-x: hidden;
`;


export const S = {
    StyledNav,
}