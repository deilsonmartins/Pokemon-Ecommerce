import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    background: #fff;
    border-radius: 50px;
    padding: 20px;

    img {
      align-self: center;
      width: 250px;
      height: 250px;
      transition: all 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }

    > strong {
      align-self: center;
      font-size: 24px;
      line-height: 20px;
      color:#FF4000;
      margin-top: 10px;
    }

    > span {
      align-self: center;
      font-size: 26px;
      font-weight: bold;
      margin: 35px 0 20px;
      color: #00BFFF;
    }

    button {
      background: blue;
      color: #fff;
      border: 0;
      border-radius: 30px;
      overflow: hidden;
      margin-top: auto;

      &:disabled {
        cursor: wait;
      }

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'yellow')};
        color: #000;
      }

      > div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        position: relative;

        svg {
          margin-right: 5px;
        }

        .loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${darken(0.2, '#7159c1')};

          > div {
            width: 18px;
            height: 18px;
          }

          svg {
            margin: 0;
          }
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

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;

  svg {
    height: 150px;
    width: 100px;
    fill: #fff;
  }
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    height: 20px;
    background: #fff;
    color: red;
    text-align: center;
    border: 1px solid blue;
    border-radius: 30px;
    padding: 30px;
    margin: 20px;
   font-size: 24px;
`;
