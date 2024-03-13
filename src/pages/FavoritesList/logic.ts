import { useState, useEffect } from "react";
import { Character } from "../../types/character";
import { useFavorites } from "../../store/FavoriteContext/FavoritesContext";

const useLogic = () => {
  const [characterName, setCharacterName] = useState("");
  const { favorites }: any = useFavorites();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  const handleSearch = (value: string) => {
    setCharacterName(value);
  };

  useEffect(() => {
    const search = characterName.toLowerCase();
    const filtered = favorites.filter((character: Character) =>
      character.name.toLowerCase().includes(search)
    );
    setFilteredCharacters(filtered);
  }, [favorites, characterName]);

  return {
    characterName,
    handleSearch,
    characters: filteredCharacters,
    total: filteredCharacters.length,
  };
};

export default useLogic;
