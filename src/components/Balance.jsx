import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  
  return (
    <div>
        <h3>Balance</h3>
        <h1 id="balance">£{total}</h1></div>
  )
}


export default Balance;