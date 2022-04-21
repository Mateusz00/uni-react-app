import Actions from "./Actions";
import uuid from "react-uuid";

const Reducer = (state, action) => {
  let newEntries;

  switch (action.type) {
    case Actions.ADD:
      action.entry.id = uuid();
      newEntries = [...state.listEntries, action.entry];
      break;
    case Actions.DELETE:
      newEntries = state.listEntries.filter(entry => entry.id !== action.id);
      break;
    case Actions.UPDATE:
      newEntries = state.listEntries.filter(entry => entry.id !== action.entry.id);
      newEntries.push(action.entry);
      break;
    case Actions.REPLACE:
      newEntries = action.entries
      break;
    default:
      throw new Error();
  }

  localStorage.setItem("listEntries", JSON.stringify(newEntries));
  return {
    listEntries: newEntries
  };
};

export default Reducer;