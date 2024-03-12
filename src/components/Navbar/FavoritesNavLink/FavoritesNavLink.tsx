import { FC } from 'react';
import { S } from './styles';
import HeartFilledIcon from '../../Icons/HeartFilledIcon';
import Text from '../../Text/Text';
import useLogic from './logic';


export const FavoritesNavLink: FC = () => {

  const { favorites } = useLogic()

  return (
    <S.StyledNavLink to='/favorites'>
      <HeartFilledIcon />
      <Text level='p1'>{favorites.length}</Text>
    </S.StyledNavLink>
  );
};