import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

function Provider({ children }) {
  const [orderToys, setOrderToys] = useState([]);
  return (
    <Context.Provider value={{ orderToys, setOrderToys }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
