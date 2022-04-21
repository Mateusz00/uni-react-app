import React, {useContext, useState} from "react";
import {AppContext} from "../state/AppContext";
import "./Navbar.css";

const exportState = (state, filename) => {
  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(state)], {type: "application/json"});
  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

const importState = async (file, replaceEntries) => {
  const reader = new FileReader();
  await reader.readAsText(file);

  reader.onload = (readerEvent) => {
    let content = readerEvent.target.result;
    replaceEntries(JSON.parse(content));
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {listEntries, replaceEntries} = useContext(AppContext);

  return (
    <nav className="navbar">
      <span className="nav-logo">MovieList</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <StyledNavItem label="Export" onClick={() => exportState(listEntries, "export.json")}/>
        <label className="nav-btn">
          <input
            type="file"
            accept="application/json"
            onChange={(e) => importState(e.target.files[0], replaceEntries)}/>
          <span className="nav-label">Import</span>
        </label>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(prev => !prev)}>
        <div className="bar"/>
      </div>
    </nav>
  );
};

const StyledNavItem = ({label, onClick}) => {
  return (
    <span className="nav-btn" onClick={onClick}>
      <span className="nav-label">{label}</span>
    </span>
  );
}

export default Navbar;