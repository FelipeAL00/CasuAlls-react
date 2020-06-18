import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import Red from '../../assets/images/red.jpg';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Red} alt="Tenis" />
            </td>
            <td>
              <strong>All Star Red</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#342ead" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#342ead" />
                </button>
              </div>
            </td>
            <td>
              <span>R$ 258,80</span>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#342ead" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1928,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
