import React, { useState, useEffect } from "react";
import DropdownList from "./DropdownList";
import DropdownResult from "./DropdownResult";
import DropdownSelect from "./DropdownSelect";

export const Dropdown = () => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Location[]>([]);
  const [groups, setGroups] = useState<string[]>([]);

  type Location = {
    id: number;
    city: string;
    country: string;
  };

  const CITIES: Location[] = [
    {
      id: 0,
      city: "Paris",
      country: "France",
    },
    {
      id: 1,
      city: "Marseille",
      country: "France",
    },
    {
      id: 2,
      city: "Lyon",
      country: "France",
    },
    {
      id: 3,
      city: "Rome",
      country: "Italy",
    },
    {
      id: 4,
      city: "Milan",
      country: "Italy",
    },
    {
      id: 5,
      city: "Naples",
      country: "Italy",
    },
    {
      id: 6,
      city: "Vilnius",
      country: "Lithuania",
    },
    {
      id: 7,
      city: "Kaunas",
      country: "Lithuania",
    },
    {
      id: 8,
      city: "Klaipėda",
      country: "Lithuania",
    },
  ];

  const toggleList = () => {
    setIsListOpen((prevValue: boolean) => !prevValue);
    return isListOpen;
  };

  function onSelect(item: Location) {
    CITIES.map((city: Location) => {
      if (item.city === city.city && !selectedItems.find((item:Location)=> item.city === city.city))
        setSelectedItems((prevItems) => [...prevItems, city]);
      return city;
    });
  }
  function dataGroups() {
    const newGroups: string[] = [];
    CITIES.map((city: Location) => newGroups.push(city.country));
    const uniqueGroups: string[] = Array.from(new Set(newGroups));
    return setGroups(uniqueGroups);
  }
  useEffect(() => {
    dataGroups();
  }, []);
  function removeFromSelected(item: Location) {
    setSelectedItems((prevItems) =>
      prevItems.filter((data: Location) => data.city !== item.city)
    );
  }
  return (
    <div className="dropdown-wrapper">
      <DropdownSelect toggleList={toggleList} isListOpen={isListOpen} />
      {isListOpen && (
        <DropdownList
          selectedItems={selectedItems}
          removeFromSelected={removeFromSelected}
          groups={groups}
          CITIES={CITIES}
          onSelect={onSelect}
        />
      )}
      <DropdownResult selectedItems={selectedItems} />
    </div>
  );
};
