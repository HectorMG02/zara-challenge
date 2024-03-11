import { ChangeEvent, FC } from 'react';
import { PropTypes } from './types';
import { S } from './styles';
import SearchIcon from './SearchIcon/SearchIcon';

export const SearchInput: FC<PropTypes> = ({ value, onChange, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <S.InputWrapper {...props}>
      <SearchIcon />
      <S.StyledInput
        type='search'
        placeholder="Buscar personaje por nombre"
        aria-label="Buscar personaje por nombre"
        value={value}
        onChange={handleChange}
      />
    </S.InputWrapper>
  );
};