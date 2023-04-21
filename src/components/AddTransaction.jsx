import React, { useContext, useState} from 'react';
import'../App.css';
import{ Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {

   const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
      e.preventDefault();
      

      const newTransaction = {
        id: uuidv4(),
        text: text,
        amount: parseInt(amount),
      };
      addTransaction (newTransaction);
    };

  return (
    <>
    <h3>Add transaction</h3>
    <Form onSubmit={onSubmit}>
    <FormGroup floating>
      <Input
        id="text"
        name="text"
        value={text} onChange={(e)=> setText(e.target.value)}
        placeholder="Text"
        type="text"
      />
      <Label for="text">
       Enter Text...
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="amount"
        name="amount"
        value={amount} onChange={(e)=> setAmount(e.target.value)}
        placeholder="Enter amount..."
        type="amount"
      />
      <Label for="amount">
        Enter Amount... 
        
      </Label>
    </FormGroup>
    {' '}
    <Button
        color="primary">Add Transaction</Button>
  </Form>
    
   </>
   
  )

  }

export default AddTransaction;