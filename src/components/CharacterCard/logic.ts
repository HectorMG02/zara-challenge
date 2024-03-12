import { useEffect, useState } from "react";
import { Character } from "../../types/character";

const useLogic = ({ character }: { character: Character}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavoriteCharacter = () => () => {
        const { id } = character
        const favoriteCharacters = localStorage.getItem('favoriteCharacters')

        if (favoriteCharacters) {
            const parsedFavoriteCharacters = JSON.parse(favoriteCharacters)
            const isFavorite = parsedFavoriteCharacters.includes(id)

            if (isFavorite) {
                const newFavoriteCharacters = parsedFavoriteCharacters.filter((characterId: number) => characterId !== id)
                localStorage.setItem('favoriteCharacters', JSON.stringify(newFavoriteCharacters))
                setIsFavorite(false)
            } else {
                const newFavoriteCharacters = [...parsedFavoriteCharacters, id]
                localStorage.setItem('favoriteCharacters', JSON.stringify(newFavoriteCharacters))
                setIsFavorite(true)
            }
        } else {
            localStorage.setItem('favoriteCharacters', JSON.stringify([id]))
            setIsFavorite(true)
        }
    }

    const checkCharacterIsFavorite = () => {
        const { id } = character
        const favoriteCharacters = localStorage.getItem('favoriteCharacters')

        if (favoriteCharacters) {
            const parsedFavoriteCharacters = JSON.parse(favoriteCharacters)
            const isFavorite = parsedFavoriteCharacters.includes(id)
            setIsFavorite(isFavorite)
        }
    }

    useEffect(() => {
        checkCharacterIsFavorite()
    }, [character])

    return {
        toggleFavoriteCharacter,
        isFavorite
    }
}

export default useLogic;
