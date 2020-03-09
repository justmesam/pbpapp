import React, { createContext, useReducer } from 'react';

import { reducer } from '../api/reducers'

export const StoreContext = createContext();

export const initialState = {
  user: {},
  shops: {},
  items: {},
  orders: {},
  errors: {}
}

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
