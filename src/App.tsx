import './theme/global.css';
import { AppRoutes } from './routes/AppRoutes';
import { FavoritesProvider } from './store/FavoriteContext/FavoritesContext';

function App() {

  return (
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  )
}

export default App
