import { FC } from 'react';
import { S } from './styles';
import HeartFilledIcon from '../Icons/HeartFilledIcon';


interface PropTypes {
  character: any;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => {

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
          <S.StyledIconButton icon={() => <HeartFilledIcon width={12} height={10.84} />} />
        </S.CharacterInfo>
      </S.StyledLink>
    </S.StyledLi>
  );
};