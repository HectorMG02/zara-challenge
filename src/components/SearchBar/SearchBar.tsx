import { FC, useEffect, useState } from 'react';

import { PropTypes } from './types';
import { S } from './styles';
import { SearchInput } from '../SearchInput/SearchInput';

const SearchBar: FC<PropTypes> = ({ value, count, ...props }) => {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);


  return (
    <S.Container {...props}>
      <SearchInput value={inputValue} onChange={setInputValue} />

      <S.StyledResultsCount level='p3'>{count} Resultados</S.StyledResultsCount>
    </S.Container>
  );
};

export default SearchBar;
