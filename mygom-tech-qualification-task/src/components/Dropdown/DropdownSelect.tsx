import React from "react";

function DropdownSelect({ toggleList, isListOpen }: any) {
  return (
    <div className="dropdown-select">
      <button onClick={() => toggleList()}>
        <span>Select location </span>
        {isListOpen ? <span>▲</span> : <span>▼</span>}
      </button>
    </div>
  );
}

export default DropdownSelect;
