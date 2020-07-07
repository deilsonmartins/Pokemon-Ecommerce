import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Input } from './styles';

const Home = props => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('').then(response => {
      const response1 = response.data.results;
      setPokemons(response1);
    });
  }, []);

  const handleAddProduct = (name, id, price) => {

    const pokemon = {id, name, price};

    const { addToCartRequest } = props;

    addToCartRequest(pokemon);

  };

  function handleSearch(event)
  {
      event.preventDefault();

      const pokemon = pokemons.filter(pokemon => pokemon.name.toUpperCase() === event.target.value.toUpperCase());

      if (pokemon.length !== 0)
      {
        setPokemons(pokemon);
      }

  }

  return (
    <>
     <Input
          placeholder="Pesquisar"
          type="text"
          id="name"
          name="name"
          onChange={(event) => handleSearch(event)}></Input><br/>
    <ProductList>
      {pokemons.map((pokemon, i) => (
        <li key={i}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt="front"/>
          <strong>{pokemon.name.toUpperCase()}</strong>
          <span>{formatPrice('24.99')}</span>
          <button type="button" onClick={() => handleAddProduct(pokemon.name, i, '24.99')}>
            <div>
              <MdAddShoppingCart size={24} color="#fff" />{' '}
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
    </>
  );
};

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
  cart: state.cart.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
