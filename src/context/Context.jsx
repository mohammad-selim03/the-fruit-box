import PropTypes from "prop-types";
import { useState, createContext } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();
  

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
