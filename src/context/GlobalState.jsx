import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Phone', amount: -300 },
        { id: 2, text: 'Salary', amount: 1000 },
        { id: 3, text: 'Grocery', amount: -20 },
        { id: 4, text: 'Sofa', amount: 50 }
    ]
}


//Create Context

export const GlobalContext = createContext(initialState);

//ProviderComponent

export const GlobalProvider = ({children}) => {

    const [state, dispatch]= useReducer(AppReducer, initialState);

    //actions

    function deleteTransaction (id){
        dispatch({
            type: 'DELETE_TRSANSACTION',
            payload: id
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}