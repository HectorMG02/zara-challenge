import styled from 'styled-components';
import * as media from '../../theme/media-queries';
import Text from "../../components/Text/Text"


const Container = styled.main`
  padding: var(--spacing-48);
  padding-top: var(--spacing-60);
  
  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
    padding-top: var(--spacing-24);
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


const CustomText = styled(Text)`
  text-transform: uppercase;
  margin-bottom: var(--spacing-36);
`




export const S = {
    Container,
    StyledGrid,
    CustomText
}