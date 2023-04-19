import React from 'react'

export const IncomeExpense= () => {
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="moeny-plus" className="money-plus">+10£</p>
      
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money-minus">-12£</p>
    </div>

    </div>
    
  )
}


export default IncomeExpense;