import React, {useContext, useState} from "react";
import ListContent from "./ListContent";
import {AppContext} from "../state/AppContext";
import ListGroups from "../state/ListGroups";
import EntryDetails from "./EntryDetails";
import ListHeader from "./ListHeader";
import "./List.css";

const List = () => {
  const context = useContext(AppContext);
  const [currentGroup, setCurrentGroup] = useState(ListGroups.ALL);
  const [showEntryDetails, setShowEntryDetails] = useState(false);
  const [entryId, setEntryId] = useState(undefined);

  const groupedEntries = (currentGroup === ListGroups.ALL) ?
    context.listEntries : context.listEntries.filter(entry => entry.status === currentGroup);

  const content = showEntryDetails ?
    <EntryDetails id={entryId} setShowEntryDetails={setShowEntryDetails} setEntryId={setEntryId}/>
    :
    <>
      <ListHeader setCurrentGroup={setCurrentGroup} setAddMode={setShowEntryDetails} currentGroup={currentGroup}/>
      <ListContent
        entries={groupedEntries}
        setShowEntryDetails={setShowEntryDetails}
        setEntryId={setEntryId}/>
    </>

  return (
    <div className="list">
      {content}
    </div>
  );
};

export default List;