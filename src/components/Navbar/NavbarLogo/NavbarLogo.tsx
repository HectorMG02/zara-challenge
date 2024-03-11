import { NavLink } from 'react-router-dom';
import MarvelLogo from './MarvelLogo';


const NavbarLogo = () => {
  return (
    <NavLink to='/'>
      <MarvelLogo />
    </NavLink>
  );
};

export default NavbarLogo;
