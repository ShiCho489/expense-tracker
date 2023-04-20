import React, { useContext } from 'react'
import '../App.css';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export const Transactions = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <h3 className="transaction">Transactions</h3>
        <ul className="List">
        {transactions.map(transaction => (<Transaction key= {transaction.id} transaction={transaction} />))}
        </ul>
        
        
       </div>
  )
}


export default Transactions;