import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import { Container, Cart, Dropdown } from './styles';

import logo from '../../assets/images/pikachu.svg';

function Header({ cartSize, cart, total, location }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Pokemon-Ecommerce" width={350} />
      </Link>

      <Cart to="/cart">
        <strong>Carrinho</strong>

        <div>
          <MdShoppingCart size={46} color="#fff" />
          <span>{cartSize}</span>
        </div>

        {cart.length && location.pathname !== '/cart' ? (
          <Dropdown>
            {cart.map(product => (
              <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.id + 1}.png`} alt={product.name} />
                <div>
                  {product.name.toUpperCase()}
                  <p>
                    {product.amount} x <span>{product.price}</span>
                  </p>
                </div>
              </div>
            ))}
            {cartSize > 3 && <div className="more">...</div>}
            <h2>
              <span>TOTAL:</span>
              <span>{total}</span>
            </h2>
          </Dropdown>
        ) : null}
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.products.length,
  cart: state.cart.products.slice(0, 3).map(product => ({
    ...product,
    price: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.products.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
}))(withRouter(Header));
