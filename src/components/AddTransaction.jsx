import React, {useState} from 'react';
import'../App.css';
import{ Form, FormGroup, Input, Label, Button } from 'reactstrap';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  return (
    <>
    <h3>Add transaction</h3>
    <Form>
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