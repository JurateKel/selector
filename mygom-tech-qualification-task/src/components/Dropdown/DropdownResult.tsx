import React from "react";
type Location = {
  id: number;
  city: string;
  country: string;
};

function DropdownResult(props: { selectedItems: Location[] }) {
  return (
    <div>
      <h4>Selected countries</h4>
      {props.selectedItems.map((item: Location, i: number) => (
        <div key={i}>{item.city}</div>
      ))}
    </div>
  );
}

export default DropdownResult;
