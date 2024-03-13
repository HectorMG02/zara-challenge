import { FC } from 'react';

import { S } from './styles';
import { ComicCard } from '../ComicCard/ComicCard';
import { Comic } from '../../types/comic';
import { PropTypes } from './types';

const ComicsList: FC<PropTypes> = ({ comics }) => {

  return (
    <S.StyledSection>
      <S.Container>
        <S.StyledHeading level='h2'>Comics</S.StyledHeading>

        <S.List>
          {comics.map((comic: Comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </S.List>
      </S.Container>
    </S.StyledSection>
  );
};

export default ComicsList;
