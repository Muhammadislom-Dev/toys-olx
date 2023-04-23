import { useState } from "react";
import { createContext } from "react";

const LikeContext = createContext();

function LikeProvider({ children }) {
  const [likeToys, setLikeToys] = useState([]);
  return (
    <LikeContext.Provider value={{ likeToys, setLikeToys }}>
      {children}
    </LikeContext.Provider>
  );
}

export { LikeContext, LikeProvider };
