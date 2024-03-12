import { useEffect, useState } from "react";
import { Character } from "../../types/character";

const useLogic = ({ character }: { character: Character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Función auxiliar para obtener la lista de personajes favoritos del almacenamiento local
  const getFavoriteCharacters = () => {
    const favoriteCharacters = localStorage.getItem('favoriteCharacters');
    return favoriteCharacters ? JSON.parse(favoriteCharacters) : [];
  }

  // Función para comprobar si el personaje actual es favorito
  const checkCharacterIsFavorite = () => {
    const favoriteCharacters = getFavoriteCharacters();
    setIsFavorite(favoriteCharacters.includes(character.id));
  }

  // Función para alternar el estado de favorito del personaje actual
  const toggleFavoriteCharacter = () => {
    const favoriteCharacters = getFavoriteCharacters();
    const index = favoriteCharacters.indexOf(character.id);

    if (index !== -1) {
      favoriteCharacters.splice(index, 1); // Elimina el personaje de la lista si ya está presente
    } else {
      favoriteCharacters.push(character.id); // Agrega el personaje a la lista si no está presente
    }

    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    checkCharacterIsFavorite();
  }, [character]);

  return {
    toggleFavoriteCharacter,
    isFavorite
  }
}

export default useLogic;
