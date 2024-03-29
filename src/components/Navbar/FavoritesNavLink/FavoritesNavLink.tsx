import { FC } from 'react';
import { S } from './styles';
import HeartFilledIcon from '../../Icons/HeartFilledIcon';
import Text from '../../Text/Text';
import useLogic from './logic';


export const FavoritesNavLink: FC = () => {
  const { getFavoritesCount } = useLogic()

  return (
    <S.StyledNavLink to='/favorites' 
      data-testid='favorites-count'
    >
      <HeartFilledIcon />
      <Text 
      level='p1'>{getFavoritesCount()}</Text>
    </S.StyledNavLink>
  );
};