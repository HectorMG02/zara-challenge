import { FC } from 'react';
import { PropTypes } from './types';
import { S } from './styles';
import SearchIcon from './SearchIcon/SearchIcon';
import useLogic from './logic';

export const SearchInput: FC<PropTypes> = ({ value, onChange, ...props }) => {
  const { handleChange } = useLogic({ onChange })

  return (
    <S.InputWrapper {...props}>
      <SearchIcon />
      <S.StyledInput
        type='search'
        placeholder="SEARCH A CHARACTER..."
        value={value}
        onChange={handleChange}
        data-testid="search-input"
      />
    </S.InputWrapper>
  );
};