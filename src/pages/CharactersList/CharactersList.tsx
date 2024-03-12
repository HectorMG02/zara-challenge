import { FC } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import useLogic from './logic'
import { CharacterCard } from '../../components/CharacterCard/CharacterCard'
import { S } from "./styles"

export const CharactersList: FC = () => {
  const { characterName, handleSearch, characters, total, loading } = useLogic()

  return (
     <S.Container>
      <SearchBar value={characterName} onChange={handleSearch} count={total} />

      
      {loading ? (
        <S.SpinnerContainer>
          <S.ShieldSpinner />
        </S.SpinnerContainer>
      ) : (
        <S.StyledGrid>
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </S.StyledGrid>
      )}

    </S.Container>
  )
}