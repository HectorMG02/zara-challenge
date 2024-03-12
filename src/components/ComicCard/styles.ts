import styled from 'styled-components';
import * as media from '../../theme/media-queries';
import { weight } from '../../theme/typography';
import Text from '../Text/Text';


const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.9rem;
  ${media.smallMedia} {
    width: 16.9rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 16.4rem;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: 26.9rem;

  ${media.smallMedia} {
    height: 25.3rem;
  }
  ${media.lteExtraSmallMedia} {
    height: 24.8rem;
  }
`;

const ComicTitle = styled(Text)`
  font-weight: ${weight.medium};

  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-8);
`;

export const S = {
    Container,
    Image,
    ComicTitle,
};