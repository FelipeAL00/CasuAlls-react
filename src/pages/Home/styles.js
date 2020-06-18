import styled from 'styled-components';
import {darken} from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-align: center;

    img {
      align-self: center;
      max-width: 280px;
      max-height: 280px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;
    }

    button {
      background: #342ead;
      border: none;
      overflow: hidden;
      border-radius: 4px;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.05,'#342ead')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
