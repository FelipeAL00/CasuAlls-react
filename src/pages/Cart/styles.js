import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #342ead;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.05, '#342ead')};
      }
    }
  }
`;

export const ProductTable = styled.div`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    max-width: 127px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
    font-size: 16px;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }
  button {
    background: none;
    border: none;
    padding: 6px;
    align-items: center;
    display: flex;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span{
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 25px;
    margin-left: 5px;
    color: #000;
  }
`;
