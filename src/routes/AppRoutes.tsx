import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { CharactersList } from '../pages/CharactersList/CharactersList';
import FavoritesList from '../pages/FavoritesList/FavoritesList';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [ 
      {
        path: '/',
        element: <CharactersList />,
      },
      {
        path: "/favorites",
        element: <FavoritesList />
      }
      
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};