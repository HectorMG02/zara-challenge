import { FC } from 'react';
import { PropTypes } from './types';
import { S } from './styles';
import Text from '../Text/Text';
import useLogic from './logic';

export const ComicCard: FC<PropTypes> = ({ comic }) => {
  const { releaseYear } = useLogic({ comic })

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