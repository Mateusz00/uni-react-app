import React from "react";
import ListNav from "./ListNav";
import "./ListHeader.css"

const ListHeader = ({setCurrentGroup, setAddMode, currentGroup}) => {
  return (
    <div className="list-header">
      <div className="list-manage-panel">
        <div className="list-manage-btn add-btn" onClick={() => setAddMode(true)}/>
      </div>
      <ListNav groupSetter={setCurrentGroup} currentGroup={currentGroup}/>
    </div>
  );
};

export default ListHeader;