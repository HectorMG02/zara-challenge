import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom';
import { S } from "./styles"

const Layout = () => {
  return (
    <>
      <Navbar />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  )
}

export default Layout