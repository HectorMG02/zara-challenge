import { FC } from 'react';
import { S } from './styles';
import HeartFilledIcon from '../Icons/HeartFilledIcon';

import useLogic from './logic';
import HeartOutlinedIcon from '../Icons/HeartOutlinedIcon';
import { PropTypes } from './types';

export const CharacterCard: FC<PropTypes> = ({ character }) => {
  const { isFavorite, toggleFavoriteCharacter } = useLogic({ character });

  return (
    <S.StyledLi>
      <S.StyledLink to={`/characters/${character.id}`}>
        <S.Thumbnail
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <S.Divider />
        <S.CharacterInfo>
          <S.AnimatedContainer />
          <S.CharacterName level='p2'>{character.name}</S.CharacterName>
           <S.StyledIconButton 
              onClick={toggleFavoriteCharacter} 
              icon={() => isFavorite ? <HeartFilledIcon width={12} height={10.84} /> : <HeartOutlinedIcon width={12} height={10.84} />}
            />
          </S.CharacterInfo>
      </S.StyledLink>
    </S.StyledLi>
  );
};