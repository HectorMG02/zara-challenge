import { FC } from 'react';
import {
  AnimatedContainer,
  CharacterInfo,
  CharacterName,
  Divider,
  StyledIconButton,
  StyledLi,
  StyledLink,
  Thumbnail,
} from './styles';
import HeartFilledIcon from '../Icons/HeartFilledIcon';


interface PropTypes {
  character: any;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => {

  return (
    <StyledLi>
      <StyledLink to={`/characters/${character.id}`}>
        <Thumbnail
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <Divider />
        <CharacterInfo>
          <AnimatedContainer />
          <CharacterName level='p2'>{character.name}</CharacterName>
          <StyledIconButton icon={() => <HeartFilledIcon width={12} height={10.84} />} />
        </CharacterInfo>
      </StyledLink>
    </StyledLi>
  );
};