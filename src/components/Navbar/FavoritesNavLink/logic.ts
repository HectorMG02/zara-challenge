import { useFavorites } from "../../../store/FavoriteContext/FavoritesContext";


const useLogic = () => {
    const favorites = useFavorites();

    const getFavoritesCount = () => {
        if(!favorites) return 0
        return favorites.favorites.length
    }
    
    return {
        getFavoritesCount
    }
}

export default useLogic;