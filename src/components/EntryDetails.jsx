import React, {useContext, useRef, useState} from "react";
import "./EntryDetails.css"
import GroupSelect from "./GroupSelect";
import {AppContext} from "../state/AppContext";
import ListGroups from "../state/ListGroups";

const EntryDetails = ({id, setShowEntryDetails, setEntryId}) => {
  const {listEntries, updateEntry, addEntry, deleteEntry} = useContext(AppContext);
  const entry = id ? listEntries.find(entry => entry.id === id) : undefined;

  const [imgUrl, setImgUrl] = useState(entry ? entry.img : "");
  const [title, setTitle] = useState(entry ? entry.title : "");
  const [score, setScore] = useState(entry ? entry.score : "");
  const [episodesWatched, setEpisodesWatched] = useState(entry ? entry.episodesWatched : "");
  const [episodesTotal, setEpisodesTotal] = useState(entry ? entry.episodes : "");
  const [status, setStatus] = useState(entry ? entry.status : ListGroups.COMPLETED);
  const formRef = useRef();

  const returnMethod = () => {
    setShowEntryDetails(false);
    setEntryId(undefined);
  };
  const deleteMethod = () => {
    deleteEntry(id);
    returnMethod();
  };
  const saveMethod = () => {
    if (!formRef.current.checkValidity()) {
      return;
    }
    const obj = {
      id,
      img: imgUrl,
      episodes: episodesTotal,
      title,
      score,
      status,
      episodesWatched
    };

    if (id) {
      updateEntry(obj);
    } else {
      addEntry(obj);
    }
    returnMethod();
  };

  return (
    <>
      <div className="entry-controls">
        <button className="entry-return" onClick={returnMethod}>Return</button>
      </div>
      <form className="entry-form" ref={formRef} onSubmit={(e) => e.preventDefault()}>
        <div className="entry-form-content">
          <label className="form-field">
            <span className="form-label">Image URL:</span>
            <input
              className="form-input"
              type="url"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </label>
          <label className="form-field">
            <span className="form-label">Title*:</span>
            <input
              className="form-input"
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label className="form-field">
            <span className="form-label">Score:</span>
            <input
              className="form-input"
              type="number"
              value={score}
              min="0"
              max="10"
              onChange={(e) => setScore(e.target.value)}/>
          </label>
          <label className="form-field">
            <span className="form-label">Episodes watched*:</span>
            <input
              className="form-input"
              type="number"
              value={episodesWatched}
              min="0"
              max={episodesTotal}
              required
              onChange={(e) => setEpisodesWatched(e.target.value)}/>
          </label>
          <label className="form-field">
            <span className="form-label">Episodes total*:</span>
            <input
              className="form-input"
              type="number"
              value={episodesTotal}
              min="0"
              required
              onChange={(e) => setEpisodesTotal(e.target.value)}/>
          </label>
          <label className="form-field">
            <span className="form-label">Status:</span>
            <GroupSelect
              showAll={false}
              classes={"form-input"}
              value={status}
              onChange={(e) => setStatus(e.target.value)}/>
          </label>
          <div className="entry-controls">
            {entry && <button className="entry-delete entry-control-btn border-flat-right" onClick={deleteMethod}>Delete</button>}
            <button
              className={`entry-control-btn ${entry && "border-flat-left"}`}
              onClick={saveMethod}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EntryDetails;