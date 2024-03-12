import { useFavorites } from "../../../context/FavoriteContext/FavoritesContext";

const useLogic = () => {
    const { favorites }: any = useFavorites();
    
    return {
        favorites
    }
}

export default useLogic;