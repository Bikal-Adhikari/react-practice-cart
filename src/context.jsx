import { useContext, useReducer, useEffect, createContext } from "react";

import cartItems from "./data";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  return (
    <AppContext.Provider value={{ remove, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
