import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ childern }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    for (let key in boundActions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {childern}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
