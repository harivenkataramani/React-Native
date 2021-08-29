import React, {useReducer} from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actionableItems = {}

    for(let key in actions){
        actionableItems[key] = actions[key](dispatch)
    }

    return <Context.Provider value={{ state, ...actionableItems }}>{children}</Context.Provider>;
  };

  return { Provider, Context };
};
