import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 36px;
  color: blue;
  justify-content: center;
  align-items: center;

  input {
    width: 400px;
    height: 30px;
    border: 1px solid red;
    border-radius: 30px;
    font-size: 24px;
    padding: 20px;
    text-align: center;

  }

  button {
    background: blue;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, 'yellow')};
      color: #000;
    }
  }
`;
