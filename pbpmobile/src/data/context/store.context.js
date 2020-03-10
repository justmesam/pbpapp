import React, { createContext, useReducer } from 'react';

import { reducer } from '../api/reducers'

export const StoreContext = createContext();

export const initialState = {
  user: {},
  shops: { count: 0, shops: [] },
  items: { count: 0, items: [] },
  orders: { count: 0, orders: []},
  errors: {},
  navigation: {},
  isAuthenicated: false
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
