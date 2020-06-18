import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import Yellow from '../../assets/images/yellow.jpg';
import Red from '../../assets/images/red.jpg';
import Blue from '../../assets/images/blue.jpg';
import Orange from '../../assets/images/orange.jpg';

function Home() {
  return (
    <ProductList>
      <li>
        <img src={Yellow} alt="All Star Yellow" />
        <strong> All Star Yellow </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> Adicionar ao carrinho </span>
        </button>
      </li>
      <li>
        <img src={Red} alt="All Star Yellow" />
        <strong> All Star Yellow </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> Adicionar ao carrinho </span>
        </button>
      </li>
      <li>
        <img src={Blue} alt="All Star Yellow" />
        <strong> All Star Yellow </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> Adicionar ao carrinho </span>
        </button>
      </li>
      <li>
        <img src={Orange} alt="All Star Yellow" />
        <strong> All Star Yellow </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> Adicionar ao carrinho </span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
