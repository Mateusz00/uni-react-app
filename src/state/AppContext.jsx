import {createContext, useReducer} from "react";
import Reducer from "./Reducer";
import Actions from "./Actions";

export const AppContext = createContext();

const loadState = () => {
  const entries = JSON.parse(localStorage.getItem("listEntries"))
  return entries ? entries : [];
};

const initialState = {
  listEntries: loadState()
};

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = {
    listEntries: state.listEntries,
    addEntry: (entry) => {
      dispatch({ type: Actions.ADD, entry });
    },
    deleteEntry: (id) => {
      dispatch({ type: Actions.DELETE, id });
    },
    updateEntry: (entry) => {
      dispatch({ type: Actions.UPDATE, entry });
    },
    replaceEntries: (entries) => {
      dispatch({ type: Actions.REPLACE, entries });
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;