import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    &:hover {
      opacity: 0.7;
    }
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 170px;
      margin-left: 10px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

