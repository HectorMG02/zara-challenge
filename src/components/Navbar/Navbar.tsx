import { FavoritesNavLink } from './FavoritesNavLink/FavoritesNavLink';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import { S } from './styles';


const Navbar = () => (
  <header>
    <S.StyledNav>
      <NavbarLogo />
      <FavoritesNavLink />
    </S.StyledNav>
  </header>
);

export default Navbar;
