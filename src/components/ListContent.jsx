import React from "react";
import "./ListContent.css";

const starCode = "\u2605";

const ListContent = ({entries, setShowEntryDetails, setEntryId}) => {
  const entriesElements = entries.sort((lhs, rhs) => lhs.title.localeCompare(rhs.title)).map((entry, num) => {
    const editEntry = () => {
      setEntryId(entry.id);
      setShowEntryDetails(true);
    }
    return (
      <div key={entry.id} className="table-row">
        <div className="entry-num">
          <div>{num + 1}</div>
          <div className="edit-btn" onClick={editEntry}/>
        </div>
        <div className="entry-img">{entry.img && <img alt={`entry-${num + 1}-cover`} src={entry.img}/>}</div>
        <div className="entry-main">
          <div className="entry-desc">
            <div className="entry-title">{entry.title}</div>
            <div className="user-progress">{`${entry.episodesWatched}/${entry.episodes}`}</div>
          </div>
          <div className="entry-user">
            <div className="user-status">{entry.status}</div>
            <div className="user-score">{entry.score && `${starCode}${entry.score}`}</div>
          </div>
        </div>
      </div>
    );
    }
  );

  return (
    <div>
      <div className="table-row header">
        <div className="entry-num">#</div>
        <div className="entry-img"/>
        <div className="entry-main">
          <div className="entry-desc">
            <div className="entry-title hide-720">Title</div>
            <div className="user-progress hide-1100">Progress</div>
          </div>
          <div className="entry-user">
            <div className="user-status hide-720">Status</div>
            <div className="user-score hide-720">Score</div>
          </div>
        </div>
      </div>
      <div className="table-content">
        {entriesElements}
      </div>
    </div>
  );
};

export default ListContent;