import React, { useContext } from 'react'
import '../App.css';
import {List, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

 

  return (
    <div>
        <List type="inline" id ="list" className= {transaction.amount < 0 ? 'minus' : 'plus'}>
          
          {transaction.text}
         <span>{sign}£{Math.abs(transaction.amount)}</span>
         <Button onClick = {()=> deleteTransaction(transaction.id)}
         color="primary" className="delete-btn">x</Button>
        </List>
    </div>
  )
}

export default Transaction;
