import React from 'react'
import { Link } from 'react-router-dom'
import logoBlack from '../../assets/LogoSkypro.png'
import { LogoStyled } from './styles'

function Logo() {
  return (
    <Link to="/">
      <LogoStyled
        src={logoBlack}
        alt="Логотип"
      />
    </Link>
  )
}

export default Logo
