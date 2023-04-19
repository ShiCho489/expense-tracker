import React from 'react'
import '../App.css';
import { List, ListInlineItem } from 'reactstrap';

export const Transactions = () => {
  return (
    <div>
        <h3 className="transaction">Transactions</h3>
        <List type="inline">
  <ListInlineItem>
  Cash 
  </ListInlineItem>
  
</List>
        </div>
  )
}


export default Transactions;