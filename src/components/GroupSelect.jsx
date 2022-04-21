import React from "react";
import ListGroups from "../state/ListGroups";

const GroupSelect = ({classes, value, onChange, showAll}) => {
  return (
      <select className={classes} value={value} onChange={onChange}>
        {showAll && <option value={ListGroups.ALL}>{ListGroups.ALL}</option>}
        <option value={ListGroups.WATCHING}>{ListGroups.WATCHING}</option>
        <option value={ListGroups.COMPLETED}>{ListGroups.COMPLETED}</option>
        <option value={ListGroups.PLANNING}>{ListGroups.PLANNING}</option>
        <option value={ListGroups.DROPPED}>{ListGroups.DROPPED}</option>
        <option value={ListGroups.ON_HOLD}>{ListGroups.ON_HOLD}</option>
      </select>
  );
};

export default GroupSelect;