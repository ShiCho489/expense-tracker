import React from 'react'
import '../App.css';
import { List, ListInlineItem, Button } from 'reactstrap';

export const Transactions = () => {
  return (
    <div>
        <h3 className="transaction">Transactions</h3>
        <List type="inline">
        <ListInlineItem>
              Cash 
        </ListInlineItem>
        <span>-10£</span>
        <Button
        color="primary" className="delete-btn">x</Button>
       </List>
       </div>
  )
}


export default Transactions;