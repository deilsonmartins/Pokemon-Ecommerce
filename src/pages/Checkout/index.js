import React, {useState, useEffect} from 'react';

import {Container, Form} from './styles';

import history from '../../services/history';

import { toast } from 'react-toastify';

const Checkout = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');

  function handleSubmit(event)
  {
    toast.success('COMPRA FINALIZADA COM SUCESSO');
    history.push('/');
    event.preventDefault();

  }

  function handleSubmitName(event)
  {
      event.preventDefault();
      setName(event.target.value);
  }

  function handleSubmitEmail(event)
  {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleSubmitCep(event)
  {
    event.preventDefault();
    setCep(event.target.value);
  }

 return (
 <Container>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value = {name}
          onChange={(event) => handleSubmitName(event)}></input><br/>
        <input
          placeholder="E-mail"
          type="text"
          id="email"
          name="email"
          value = {email}
          onChange={(event) => handleSubmitEmail(event)}></input><br/>
        <input
          placeholder="Cep"
          type="text"
          id="cep"
          name="cep"
          value = {cep}
          onChange={(event) => handleSubmitCep(event)}></input><br/>
        <button type="submit">Finalizado</button>
      </Form>
 </Container>
 )
}

export default Checkout;
