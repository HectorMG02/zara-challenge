import { useEffect, useState } from "react";
import { Character } from "../../types/character";
import { useFavorites } from "../../context/FavoriteContext/FavoritesContext";


const useLogic = ({ character }: { character: Character }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoritesContext = useFavorites();

  if (!favoritesContext) {
    throw new Error('useLogic must be used within a FavoritesProvider');
  }

  const { favorites, addFavorite, removeFavorite } = favoritesContext;

  const checkCharacterIsFavorite = () => {
    setIsFavorite(favorites.some((favCharacter) => favCharacter.id === character.id));
  }

  const toggleFavoriteCharacter = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    checkCharacterIsFavorite();
  }, [character, favorites]);

  return {
    toggleFavoriteCharacter,
    isFavorite
  };
}

export default useLogic;
