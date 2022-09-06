import React from "react";

type Location = {
  id: number;
  city: string;
  country: string;
};

function DropdownList(props: {
  selectedItems: Location[];
  removeFromSelected: any;
  groups: string[];
  CITIES: Location[];
  onSelect: any;
}) {
  return (
    <div className="dropdown-list">
      {props.selectedItems.map((item: Location, i: number) => (
          <span key={i}>
            {item.city + ' '}
            <span className='span-delete' onClick={() => props.removeFromSelected(item)}>
            ✖
            </span>{" "}
          </span>
        )
      )}
      {props.groups.map((item: string, i: number) => (
        <ul key={i}>
          <li className="group-name">
            {item}
            <ul>
              {props.CITIES.map(
                (city: Location, index: number) =>
                  city.country === item && (
                    <li className="group-item" key={index} onClick={() => props.onSelect(city)}>
                      {city.city}
                    </li>
                  )
              )}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default DropdownList;
