import { FC } from 'react';
import { S } from './styles';
import HeartFilledIcon from '../../Icons/HeartFilledIcon';
import Text from '../../Text/Text';


export const FavoritesNavLink: FC = () => {
  return (
    <S.StyledNavLink to='/favorites'>
      <HeartFilledIcon />
      <Text level='p1'>0</Text>
    </S.StyledNavLink>
  );
};