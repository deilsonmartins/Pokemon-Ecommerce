import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, EmptyCart } from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(id, amount) {

    updateAmountRequest(id, amount  + 1);

  }

  function decrement(id, amount) {

    updateAmountRequest(id, amount - 1);
  }

  if (!cart.length) {
    return (
      <Container>
        <EmptyCart>
          <MdRemoveShoppingCart size={140} />
          <h2>O CARRINHO ESTÁ VAZIO</h2>
          <p>No momento não há pokemons por aqui :(</p>
          <Link to="/">
            <button type="button">Quero Pokemon</button>
          </Link>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>POKEMON</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.id + 1}.png`} alt={product.name} />
              </td>
              <td>
                <strong>{product.name.toUpperCase()}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product.id, product.amount)}>
                    <MdRemoveCircleOutline size={20} color="red" />
                  </button>
                  <input type="text" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product.id, product.amount)}>
                    <MdAddCircleOutline size={20} color="red" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <Link to="/checkout">
          <button type="button">FINALIZAR COMPRA</button>
        </Link>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.products.map(product => ({
    ...product,
    subtotal: formatPrice(Number(product.price) * product.amount),
  })),
  total: formatPrice(
    state.cart.products.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
