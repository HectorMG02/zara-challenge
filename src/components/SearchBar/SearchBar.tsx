import { FC } from 'react';

import { PropTypes } from './types';
import { S } from './styles';
import { SearchInput } from '../SearchInput/SearchInput';


const SearchBar: FC<PropTypes> = ({ value, onChange, count, ...props }) => {
 
  return (
    <S.Container {...props}>
      <SearchInput value={value} onChange={onChange} />

      <S.StyledResultsCount level='p3'>{count} {
        count === 1 ? "RESULT" : "RESULTS"
      } </S.StyledResultsCount>
    </S.Container>
  );
};

export default SearchBar;
