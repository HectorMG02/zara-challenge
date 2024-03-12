import { FC } from 'react';
import { PropTypes } from './types';
import { S } from './styles';
import Text from '../Text/Text';

const RELEASE_DATE = 'onsaleDate';

export const ComicCard: FC<PropTypes> = ({ comic }) => {
  const releaseDate = comic.dates.find((date) => date.type === RELEASE_DATE);
  const releaseYear = releaseDate && new Date(releaseDate?.date).getFullYear();

  return (
    <S.Container>
      <S.Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <S.ComicTitle level='p1'>{comic.title}</S.ComicTitle>
      {releaseYear && <Text level='p3'>{releaseYear}</Text>}
    </S.Container>
  );
};