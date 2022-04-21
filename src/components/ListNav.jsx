import React from "react";
import ListGroups from "../state/ListGroups";
import GroupSelect from "./GroupSelect";
import "./ListNav.css";

const ListNav = ({groupSetter, currentGroup}) => {
  return (
    <>
      <div className="list-groups">
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.ALL)}>{ListGroups.ALL}</div>
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.WATCHING)}>{ListGroups.WATCHING}</div>
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.COMPLETED)}>{ListGroups.COMPLETED}</div>
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.PLANNING)}>{ListGroups.PLANNING}</div>
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.DROPPED)}>{ListGroups.DROPPED}</div>
        <div className="list-group-btn" onClick={() => groupSetter(ListGroups.ON_HOLD)}>{ListGroups.ON_HOLD}</div>
      </div>
      <GroupSelect classes={"group-select"} onChange={e => groupSetter(e.target.value)} value={currentGroup} showAll/>
    </>
  );
};

export default ListNav;