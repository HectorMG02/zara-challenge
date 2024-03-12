import { CharacterCard } from "../../components/CharacterCard/CharacterCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { Character } from "../../types/character"
import { S } from "../CharactersList/styles"
import useLogic from "./logic"

const FavoritesList = () => {
  const { characterName, handleSearch, characters, total } = useLogic()

  return (
    <S.Container>
    <SearchBar value={characterName} onChange={handleSearch} count={total} />

    <S.StyledGrid>
        {characters.map((character: Character, index: number) => (
          <CharacterCard key={index} character={character} />
        ))}
      </S.StyledGrid>
  </S.Container>
  )
}

export default FavoritesList