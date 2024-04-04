import React from 'react'
import { HeaderContainer } from '../StyledComponents'
import logo from '../assests/imgs/stackline_logo.svg'
const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <img src={logo} alt='Stack Line Logo' className='logo'/>
    </HeaderContainer>
  )
}

export default Header