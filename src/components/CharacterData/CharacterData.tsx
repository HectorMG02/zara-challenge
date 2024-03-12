import { FC } from 'react'
import { S } from "./styles"
import { IconButton } from '../IconButton/IconButton';
import { PropTypes } from './types';
import useLogic from './logic';
import HeartFilledIcon from '../Icons/HeartFilledIcon';
import HeartOutlinedIcon from '../Icons/HeartOutlinedIcon';
import Text from '../Text/Text';

const CharacterData: FC<PropTypes> = ({ character }) => {

    const { isFavorite, toggleFavoriteCharacter } = useLogic({ character })



    return (
        <S.StyledHeader>
          <S.Container>
            <S.Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
    
            <S.Resume>
              <S.Wrapper>
                <S.StyledHeading level='h1'>{character.name}</S.StyledHeading>
                <IconButton 
                    onClick={toggleFavoriteCharacter}
                    icon={() => isFavorite ? <HeartFilledIcon width={24} height={21.68} /> : <HeartOutlinedIcon width={24} height={21.68} />}
                />
              </S.Wrapper>
              <Text level='p1'>{character.description}</Text>
            </S.Resume>
          </S.Container>
        </S.StyledHeader>
      );
}

export default CharacterData