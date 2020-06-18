import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <h1>REACTSHOES</h1>
          <img src={logo} alt="ReactShoes" />
        </Link>
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
